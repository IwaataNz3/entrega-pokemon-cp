'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button/Button'

const Header = () => {
  const router = useRouter()

  // Ao sair, apaga o token e os favoritos do navegador
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('favorites')
    router.push('/login')
  }

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-md mb-4">
      <Link href="/cards" className="font-semibold">Início</Link>
      <Button type="button" onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
        Sair
      </Button>
    </div>
  )
}

export default Header
