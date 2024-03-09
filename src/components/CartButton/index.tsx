import { Handbag } from 'phosphor-react'
import { Badge, Container } from './styles'

type CartButtonProps = {
  productsCount?: number
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

export function CartButton({
  productsCount = 0,
  variant,
  size,
  onClick,
}: CartButtonProps) {
  return (
    <Container
      type="button"
      variant={variant}
      size={size}
      className={productsCount ? 'active' : ''}
      onClick={onClick}
    >
      <Handbag size={32} />
      {!!productsCount && <Badge>{productsCount}</Badge>}
    </Container>
  )
}
