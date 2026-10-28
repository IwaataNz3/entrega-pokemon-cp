'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import { LoginResponse } from '@/interfaces/login.interface'

const LoginPage = () => {
  const router = useRouter()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/cards')
    }
  }, [router])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
   
      const request = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      })
      const response: LoginResponse = await request.json()


      if (!response.token) {
        throw new Error(response.message)
      }

   
      localStorage.setItem('token', response.token)
      router.push('/cards')
    } catch (error) {
      if (error instanceof Error && error.message) {
        setError(error.message)
      } else {
        setError('Erro ao realizar login')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-md w-80">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          id="login"
          label="Login"
          className="w-full"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <Button type="submit" loading={loading}>
          Entrar
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
