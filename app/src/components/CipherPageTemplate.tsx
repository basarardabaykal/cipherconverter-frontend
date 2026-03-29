import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CipherPageTemplateProps = {
  title: string
  family: string
  description: string
  controls: ReactNode
  outputText?: string
}

function CipherPageTemplate({
  title,
  family,
  description,
  controls,
  outputText = '',
}: CipherPageTemplateProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#edf2f7] px-4 pb-16 pt-5 text-[#0f172a] sm:px-5">
      <header className="sticky top-0 z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full border border-[#d8e2ee] bg-[#f9fbff]/90 px-4 py-3 backdrop-blur">
        <Link
          className="text-base font-bold tracking-[0.02em] text-[#0f172a] no-underline"
          to="/"
        >
          CipherConverter
        </Link>
        <Link
          className="rounded-full border border-[#c2d6e7] bg-white px-3 py-1.5 text-sm font-semibold text-[#205e8d] no-underline transition-colors hover:bg-[#f2f8ff]"
          to="/"
        >
          Back to Home
        </Link>
      </header>

      <section className="mx-auto mt-12 w-full max-w-7xl">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1f6fd1]">
          {family}
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-[1.06] font-bold">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#4b5563]">{description}</p>
      </section>

      <section className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-2xl border border-[#d8e2ee] bg-white p-5 shadow-[0_12px_28px_rgba(38,73,117,0.08)]">
          <h2 className="m-0 text-lg font-bold">Input</h2>
          <div className="mt-4">{controls}</div>
        </article>

        <article className="rounded-2xl border border-[#d8e2ee] bg-[#f8fbff] p-5 shadow-[0_12px_28px_rgba(38,73,117,0.08)]">
          <h2 className="m-0 text-lg font-bold">Output</h2>
          <div className="mt-4 space-y-3">
            <label className="block">
              <span className="text-sm font-semibold text-[#4b5563]">Converted Output</span>
              <textarea
                readOnly
                value={outputText}
                rows={10}
                placeholder="Converted text will appear here after processing."
                className="mt-2 w-full resize-y rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm leading-6 text-[#0f172a] outline-none"
              />
            </label>

          </div>
        </article>
      </section>
    </main>
  )
}

export default CipherPageTemplate