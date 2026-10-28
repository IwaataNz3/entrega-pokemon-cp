import Button from '@/components/Button/Button'

interface FavoriteButtonProps {
  isFavorite: boolean
  onClick: () => void
}

const FavoriteButton = ({ isFavorite, onClick }: FavoriteButtonProps) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={isFavorite ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
    >
      {isFavorite ? '★ Desfavoritar' : '☆ Favoritar'}
    </Button>
  )
}

export default FavoriteButton
