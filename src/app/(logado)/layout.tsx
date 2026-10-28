'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header/Header'

interface LoggedLayoutProps {
  children: ReactNode
}

const LoggedLayout = ({ children }: LoggedLayoutProps) => {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="w-full max-w-5xl">
      <Header />
      {children}
    </div>
  )
}

export default LoggedLayout
