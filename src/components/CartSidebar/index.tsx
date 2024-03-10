import { X } from 'phosphor-react'
import {
  CloseButton,
  Container,
  FinalizeButton,
  Product,
  Products,
  Quantity,
  Total,
} from './styles'
import Image from 'next/image'
import { useCartSidebar } from '@/hooks/useCartSidebar'

export function CartSidebar() {
  const { isSidebarOpen, closeSidebar } = useCartSidebar()

  return (
    <Container variant={isSidebarOpen ? 'open' : 'closed'}>
      <CloseButton onClick={closeSidebar} title="Close sidebar">
        <X size={24} />
      </CloseButton>
      <h4>Sacola de compras</h4>
      <Products>
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <Product key={p}>
            <Image
              src="https://github.com/newton-duarte.png"
              width={102}
              height={93}
              alt=""
            />
            <div>
              <h6>Camiseta Beyond the Limits</h6>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
        ))}
      </Products>
      <footer>
        <Quantity>
          <p>Quantidade</p>
          <p>3 itens</p>
        </Quantity>
        <Total>
          <p>Valor total</p>
          <p>R$ 270,00</p>
        </Total>

        <FinalizeButton>Finalizar compra</FinalizeButton>
      </footer>
    </Container>
  )
}
