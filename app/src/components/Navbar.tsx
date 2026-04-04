import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type NavbarProps = {
  isHomePage?: boolean;
};

export default function Navbar({ isHomePage = false }: NavbarProps) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full border border-[#d8e2ee] bg-[#f9fbff]/90 px-4 py-3 backdrop-blur">
      <Link
        className="text-base font-bold tracking-[0.02em] text-[#0f172a] no-underline"
        to="/"
      >
        CipherConverter
      </Link>
      <nav className="flex items-center gap-3" aria-label="Main">
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
      </nav>
    </header>
  );
}
