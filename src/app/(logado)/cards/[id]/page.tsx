import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Pokemon } from '@/interfaces/response-api-pokemon.interface'
import CardFavorite from '@/components/CardFavorite/CardFavorite'

interface CardPageProps {
  params: Promise<{
    id: string
  }>
}


async function getData(id: string): Promise<Pokemon | null> {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`)

  if (request.status === 404) {
    return null
  }
  if (!request.ok) {
    throw new Error(`Erro ${request.status} ao buscar a carta`)
  }

  return request.json()
}

const CardPage = async ({ params }: CardPageProps) => {
  const { id } = await params
  const card = await getData(id)

  if (!card) {
    notFound()
  }

  return (
    <div className="bg-white p-4 rounded-md">
      <Link href="/cards" className="underline">Voltar</Link>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
        <Image src={card.images.large} alt={card.name} width={490} height={684} className="w-full h-auto" unoptimized />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">
            #{card.nationalPokedexNumbers?.[0] ?? '-'} - {card.name}
          </h2>
          <p>Tipos: {card.types?.join(', ') ?? '-'}</p>
          <p>HP: {card.hp ?? '-'}</p>
          <p>Categoria: {card.supertype} {card.subtypes?.join(', ')}</p>
          <p>Evolui de: {card.evolvesFrom ?? '-'}</p>
          <p>Raridade: {card.rarity ?? '-'}</p>
          <p>Coleção: {card.set.name} ({card.set.series})</p>
          <p>Número na coleção: {card.number}/{card.set.printedTotal}</p>
          <p>Artista: {card.artist ?? '-'}</p>
          <p>Fraquezas: {card.weaknesses?.map((weakness) => `${weakness.type} ${weakness.value}`).join(', ') ?? '-'}</p>

          {card.attacks && (
            <div>
              <h3 className="font-bold mt-2">Ataques</h3>
              <ul>
                {card.attacks.map((attack) => (
                  <li key={attack.name} className="border-b py-1">
                    <strong>{attack.name}</strong> {attack.damage && `(${attack.damage})`}
                    {attack.text && <p className="text-sm text-gray-600">{attack.text}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-2">
            <CardFavorite card={card} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPage
