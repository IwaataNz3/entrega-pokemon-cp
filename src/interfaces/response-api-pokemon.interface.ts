export interface ResponsePokemonList {
  page: number
  pageSize: number
  count: number
  totalCount: number
  data: Pokemon[]
}

export interface Pokemon {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level: string
  hp: string
  types: string[]
  evolvesFrom: string
  abilities: Ability[]
  attacks: Attack[]
  weaknesses: Weakness[]
  resistances: Resistance[]
  retreatCost: string[]
  convertedRetreatCost: number
  set: Set
  number: string
  artist: string
  rarity: string
  nationalPokedexNumbers: number[]
  legalities: Legalities
  images: Images
  tcgplayer: Tcgplayer
  cardmarket: Cardmarket
}

export interface Ability {
  name: string
  text: string
  type: string
}

export interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export interface Weakness {
  type: string
  value: string
}

export interface Resistance {
  type: string
  value: string
}

export interface Set {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: Images
}

export interface Legalities {
  unlimited: string
}

export interface Images {
  symbol: string
  logo: string
  large: string
  small: string
}

export interface Tcgplayer {
  url: string
  updatedAt: string
  prices: Prices
}

export interface Prices {
  holofoil: Holofoil
  reverseHolofoil: ReverseHolofoil
}

export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}

export interface ReverseHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: unknown
}

export interface Cardmarket {
  url: string
  updatedAt: string
  prices: Prices
}
