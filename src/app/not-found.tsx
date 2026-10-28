import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="bg-white p-6 rounded-md text-center">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="mb-4">Página não encontrada</p>
      <Link href="/cards" className="underline">Voltar para as cartas</Link>
    </div>
  )
}

export default NotFoundPage
