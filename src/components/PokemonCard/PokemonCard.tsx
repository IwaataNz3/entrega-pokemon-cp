import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from '@/interfaces/response-api-pokemon.interface'
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton'

interface PokemonCardProps {
  card: Pokemon
  isFavorite: boolean
  onToggleFavorite: (card: Pokemon) => void
}

const PokemonCard = ({ card, isFavorite, onToggleFavorite }: PokemonCardProps) => {
  return (
    <div className={`bg-white p-3 rounded-md border-4 ${isFavorite ? 'border-yellow-500' : 'border-white'}`}>
      {/* Clicar na carta leva para a página de detalhes */}
      <Link href={`/cards/${card.id}`}>
        <Image src={card.images.large} alt={card.name} width={245} height={342} className="w-full h-auto" unoptimized />
        <h3 className="font-bold mt-2">
          #{card.nationalPokedexNumbers?.[0] ?? '-'} - {card.name}
        </h3>
      </Link>
      <p>Tipos: {card.types?.join(', ') ?? '-'}</p>
      <p className="mb-2">HP: {card.hp ?? '-'}</p>
      <FavoriteButton isFavorite={isFavorite} onClick={() => onToggleFavorite(card)} />
    </div>
  )
}

export default PokemonCard
