'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Pokemon, ResponsePokemonList } from '@/interfaces/response-api-pokemon.interface'
import Input from '@/components/Input/Input'
import PokemonCard from '@/components/PokemonCard/PokemonCard'
import useFavorites from '@/hooks/use-favorites/use-favorites'

const CardsPage = () => {
  const [search, setSearch] = useState('')
  const [cards, setCards] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { isFavorite, toggleFavorite } = useFavorites()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setLoading(true)
    setError(false)
  }


  useEffect(() => {
    let ignore = false


    const timer = setTimeout(async () => {
      try {

        const url = search
          ? `${process.env.NEXT_PUBLIC_API_URL}/pokemon?q=name:${encodeURIComponent(search)}&orderBy=number,name&pageSize=15`
          : `${process.env.NEXT_PUBLIC_API_URL}/pokemon?orderBy=number,name&pageSize=15`

        const request = await fetch(url)
        if (!request.ok) {
          throw new Error(`Erro ${request.status}`)
        }
        const response: ResponsePokemonList = await request.json()

        if (!ignore) {
          setCards(response.data)
        }
      } catch (error) {
        console.error(`Error fetching cards: ${error}`)
        if (!ignore) {
          setError(true)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }, search ? 500 : 0)

  
    return () => {
      ignore = true
      clearTimeout(timer)
    }
  }, [search])

  let content = (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card) => (
        <PokemonCard
          key={card.id}
          card={card}
          isFavorite={isFavorite(card.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  )

  if (loading) {
    content = <p className="text-center">Carregando...</p>
  } else if (error) {
    content = <p className="text-center text-red-700">Erro ao carregar as cartas. Atualize a página para tentar novamente.</p>
  } else if (cards.length === 0) {
    content = <p className="text-center">Nenhuma carta encontrada.</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Lista de Pokémon</h2>
      <div className="mb-4">
        <Input
          id="search"
          type="text"
          placeholder="Buscar pelo nome do Pokémon..."
          className="w-full"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {content}
    </div>
  )
}

export default CardsPage
