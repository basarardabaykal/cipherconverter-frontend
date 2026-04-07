import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const success = await login({ email, password })

    setIsLoading(false)

    if (!success) {
      return
    }

    navigate('/')
  }

  return (
    <main className="min-h-screen bg-[#edf2f7] px-4 py-8 text-[#0f172a] sm:px-5">
      <section className="mx-auto w-full max-w-md rounded-2xl border border-[#d8e2ee] bg-white p-6 shadow-[0_14px_36px_rgba(38,73,117,0.08)]">
        <h1 className="m-0 text-2xl font-bold">Login</h1>
        <p className="mt-2 text-sm text-[#4b5563]">Enter your credentials to continue.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#4b5563]">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-[#d1deeb] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none transition focus:border-[#1f6fd1] focus:ring-2 focus:ring-[#1f6fd1]/15"
              required
            />
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-[#1f6fd1] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(35,94,175,0.26)] transition-colors hover:bg-[#174e93] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-[#4b5563]">
          Don't have an account?{' '}
          <Link className="font-semibold text-[#1f6fd1]" to="/register">
            Register
          </Link>
        </p>
      </section>
    </main>
  )
}

export default LoginPage