'use client'

import { Pokemon } from '@/interfaces/response-api-pokemon.interface'
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton'
import useFavorites from '@/hooks/use-favorites/use-favorites'

interface CardFavoriteProps {
  card: Pokemon
}


const CardFavorite = ({ card }: CardFavoriteProps) => {
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <FavoriteButton isFavorite={isFavorite(card.id)} onClick={() => toggleFavorite(card)} />
  )
}

export default CardFavorite
