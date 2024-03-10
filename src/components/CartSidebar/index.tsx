import { X } from 'phosphor-react'
import {
  CloseButton,
  Container,
  EmptyCart,
  FinalizeButton,
  ImageContainer,
  Product,
  Products,
  Quantity,
  Total,
} from './styles'
import Image from 'next/image'
import { useCartSidebar } from '@/hooks/useCartSidebar'
import { useShoppingCart } from 'use-shopping-cart'
import { useMemo, useState } from 'react'
import axios from 'axios'

export function CartSidebar() {
  const { isSidebarOpen, closeSidebar } = useCartSidebar()
  const { cartDetails, cartCount, formattedTotalPrice, removeItem } =
    useShoppingCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const cartProducts = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.entries(cartDetails || {}).map(([_, product]) => product)
  }, [cartDetails])

  async function handleBuyButton() {
    if (!cartCount) return

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartProducts.map((product) => ({
          id: product.id,
          priceId: product.priceId,
          quantity: product.quantity,
        })),
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Container variant={isSidebarOpen ? 'open' : 'closed'}>
      <CloseButton onClick={closeSidebar} title="Close sidebar">
        <X size={24} />
      </CloseButton>
      <h4>Sacola de compras</h4>
      {cartCount ? (
        <Products>
          {cartProducts.map((product) => (
            <Product key={product.id}>
              <ImageContainer>
                <Image
                  src={product.image || ''}
                  width={102}
                  height={93}
                  alt=""
                />
              </ImageContainer>
              <div>
                <h6>{product.name}</h6>
                <span>{product.formattedValue}</span>
                <button onClick={() => removeItem(product.id)}>Remover</button>
              </div>
            </Product>
          ))}
        </Products>
      ) : (
        <EmptyCart>Seu carrinho está vazio...</EmptyCart>
      )}
      <footer>
        <Quantity>
          <p>Quantidade</p>
          <p>{cartCount} itens</p>
        </Quantity>
        <Total>
          <p>Valor total</p>
          <p suppressHydrationWarning>{formattedTotalPrice}</p>
        </Total>

        <FinalizeButton
          disabled={!cartCount || isCreatingCheckoutSession}
          onClick={handleBuyButton}
        >
          Finalizar compra
        </FinalizeButton>
      </footer>
    </Container>
  )
}
