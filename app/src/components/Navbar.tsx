import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type NavbarProps = {
  isHomePage?: boolean;
};

export default function Navbar({ isHomePage = false }: NavbarProps) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header
      className={`sticky top-0 z-10 mx-auto flex w-full max-w-7xl gap-3 border border-[#d8e2ee] bg-[#f9fbff]/90 px-4 py-3 backdrop-blur ${
        isHomePage
          ? 'flex-col items-start rounded-2xl md:flex-row md:items-center md:justify-between md:rounded-full'
          : 'items-center justify-between rounded-full'
      }`}
    >
      <Link
        className="text-base font-bold tracking-[0.02em] text-[#0f172a] no-underline"
        to="/"
      >
        CipherConverter
      </Link>
      <nav
        className={
          isHomePage
            ? 'flex w-full items-center justify-between gap-3 md:w-auto md:justify-normal'
            : 'flex gap-3 items-center'
        }
        aria-label="Main"
      >
        {isHomePage && (
          <>
            <a
              className="text-sm font-semibold text-[#4b5563] no-underline hover:text-[#0f172a]"
              href="#tools"
            >
              Tools
            </a>
            <a
              className="text-sm font-semibold text-[#4b5563] no-underline hover:text-[#0f172a]"
              href="#about"
            >
              How it works
            </a>
            <a
              className="text-sm font-semibold text-[#4b5563] no-underline hover:text-[#0f172a]"
              href="#api"
            >
              API
            </a>
          </>
        )}

        {isAuthenticated ? (
          <button
            onClick={logout}
            className={
              isHomePage
                ? 'text-sm font-semibold text-[#1f6fd1] bg-transparent border-none cursor-pointer p-0 m-0 no-underline hover:text-[#174e93]'
                : 'rounded-full border border-[#c2d6e7] bg-white px-3 py-1.5 text-sm font-semibold text-[#1f6fd1] no-underline transition-colors hover:bg-[#f2f8ff] cursor-pointer'
            }
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className={
              isHomePage
                ? 'text-sm font-semibold text-[#1f6fd1] no-underline hover:text-[#174e93]'
                : 'rounded-full border border-[#c2d6e7] bg-white px-3 py-1.5 text-sm font-semibold text-[#1f6fd1] no-underline transition-colors hover:bg-[#f2f8ff]'
            }
          >
            Login
          </Link>
        )}

        {!isHomePage && (
          <Link
            className="rounded-full border border-[#c2d6e7] bg-white px-3 py-1.5 text-sm font-semibold text-[#205e8d] no-underline transition-colors hover:bg-[#f2f8ff]"
            to="/"
          >
            Back to Home
          </Link>
        )}
      </nav>
    </header>
  );
}
