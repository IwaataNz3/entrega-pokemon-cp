'use client'

import { useCallback, useEffect, useState } from 'react'
import { Pokemon } from '@/interfaces/response-api-pokemon.interface'

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Pokemon[]>([])


  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {

      setFavorites(JSON.parse(saved))
    }
  }, [])

  const isFavorite = useCallback((id: string) => {
    return favorites.some((item) => item.id === id)
  }, [favorites])

  const toggleFavorite = useCallback((card: Pokemon) => {
    const newList = isFavorite(card.id)
      ? favorites.filter((item) => item.id !== card.id)
      : [...favorites, card]

    setFavorites(newList)
    localStorage.setItem('favorites', JSON.stringify(newList))
  }, [favorites, isFavorite])

  return { favorites, isFavorite, toggleFavorite }
}

export default useFavorites
