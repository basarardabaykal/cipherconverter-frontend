import { Link } from 'react-router-dom'

type CipherTool = {
  name: string
  description: string
  path: string
  family: string
}

const cipherTools: CipherTool[] = [
  {
    name: 'Caesar Cipher',
    description: 'Shift letters by a numeric key for quick classic encryption.',
    path: '/ciphers/caesar',
    family: 'Classical',
  },
  {
    name: 'Vigenere Cipher',
    description: 'Encrypt alphabetic text with a repeating keyword pattern.',
    path: '/ciphers/vigenere',
    family: 'Polyalphabetic',
  },
  {
    name: 'Atbash Cipher',
    description: 'Reverse the alphabet mapping to encode or decode messages.',
    path: '/ciphers/atbash',
    family: 'Substitution',
  },
  {
    name: 'ROT13',
    description: 'Apply a fixed 13-character shift with instant reversibility.',
    path: '/ciphers/rot13',
    family: 'Classical',
  },
  {
    name: 'Affine Cipher',
    description: 'Use multiplicative and additive keys on alphabet positions.',
    path: '/ciphers/affine',
    family: 'Mathematical',
  },
  {
    name: 'Transposition Cipher',
    description: 'Rearrange characters by position to transform plaintext patterns.',
    path: '/ciphers/transposition',
    family: 'Transposition',
  },
  {
    name: 'Playfair Cipher',
    description: 'Encrypt text digraphs using a keyword-based 5x5 key square.',
    path: '/ciphers/playfair',
    family: 'Digraph',
  },
  {
    name: 'Hill Cipher',
    description: 'Apply linear algebra with matrix keys to transform plaintext.',
    path: '/ciphers/hill',
    family: 'Matrix',
  },
]

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#edf2f7] px-4 pb-16 pt-5 text-[#0f172a] sm:px-5">
      <header className="sticky top-0 z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-3 rounded-2xl border border-[#d8e2ee] bg-[#f9fbff]/90 px-4 py-3 backdrop-blur md:flex-row md:items-center md:justify-between md:rounded-full">
        <Link
          className="text-base font-bold tracking-[0.02em] text-[#0f172a] no-underline"
          to="/"
        >
          CipherConverter
        </Link>
        <nav
          className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-normal"
          aria-label="Main"
        >
          <a className="text-sm font-semibold text-[#4b5563] no-underline hover:text-[#0f172a]" href="#tools">
            Tools
          </a>
          <a className="text-sm font-semibold text-[#4b5563] no-underline hover:text-[#0f172a]" href="#about">
            How it works
          </a>
          <a className="text-sm font-semibold text-[#4b5563] no-underline hover:text-[#0f172a]" href="#api">
            API
          </a>
        </nav>
      </header>

      <section className="mx-auto mb-11 mt-14 max-w-3xl text-center" id="about">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1f6fd1]">
          All your cipher tools in one place
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4.4vw,3.7rem)] leading-[1.06] font-bold">
          Every cipher conversion you need, one click away.
        </h1>
        <p className="mx-auto mt-4 max-w-[64ch] text-base leading-7 text-[#4b5563]">
          Convert, decrypt, and experiment with classical cipher methods through
          focused tools. Pick a method below to jump directly into its converter
          workflow.
        </p>
        <a
          className="mt-6 inline-flex rounded-full bg-[#1f6fd1] px-5 py-3 text-sm font-bold text-white no-underline shadow-[0_12px_24px_rgba(35,94,175,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#174e93]"
          href="#tools"
        >
          Browse Cipher Methods
        </a>
      </section>

      <section
        className="relative z-1 mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        id="tools"
        aria-label="Cipher methods"
      >
        {cipherTools.map((tool, index) => (
          <Link
            className="group flex min-h-48 flex-col gap-3 rounded-2xl border border-[#d8e2ee] bg-white p-4 text-inherit no-underline shadow-[0_6px_0_rgba(202,216,233,0.8)] transition-all hover:-translate-y-1 hover:border-[#b9d0e7] hover:shadow-[0_24px_40px_rgba(38,73,117,0.12)] md:min-h-52"
            to={tool.path}
            key={tool.path}
            style={{ transitionDelay: `${index * 35}ms` }}
          >
            <span className="w-fit rounded-full bg-[#eaf4ff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#1f6fd1]">
              {tool.family}
            </span>
            <h2 className="m-0 text-[1.08rem] font-bold">{tool.name}</h2>
            <p className="m-0 text-sm leading-6 text-[#4b5563]">{tool.description}</p>
            <span className="mt-auto text-sm font-bold text-[#1f6fd1] group-hover:text-[#174e93]">
              Open Tool
            </span>
          </Link>
        ))}
      </section>

      <section
        className="mx-auto mt-6 grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3"
        id="api"
        aria-label="Workflow"
      >
        <article className="rounded-xl border border-[#d8e2ee] bg-[#f8fbff] p-4">
          <span className="font-bold text-[#1f6fd1]">01</span>
          <h3 className="mt-2 text-base font-semibold">Select Cipher</h3>
          <p className="mt-2 text-sm leading-6 text-[#4b5563]">
            Choose a method based on your use case and key style.
          </p>
        </article>
        <article className="rounded-xl border border-[#d8e2ee] bg-[#f8fbff] p-4">
          <span className="font-bold text-[#1f6fd1]">02</span>
          <h3 className="mt-2 text-base font-semibold">Paste or Type Text</h3>
          <p className="mt-2 text-sm leading-6 text-[#4b5563]">
            Enter plaintext or ciphertext and provide the required key.
          </p>
        </article>
        <article className="rounded-xl border border-[#d8e2ee] bg-[#f8fbff] p-4">
          <span className="font-bold text-[#1f6fd1]">03</span>
          <h3 className="mt-2 text-base font-semibold">Convert Instantly</h3>
          <p className="mt-2 text-sm leading-6 text-[#4b5563]">
            Get transformed output and continue with decode or encode flows.
          </p>
        </article>
      </section>
    </main>
  )
}

export default HomePage