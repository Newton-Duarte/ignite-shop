import { Header } from '@/components/Header'
import { CartSidebar } from '@/components/CartSidebar'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import { CartSidebarProvider } from '@/contexts/CartSidebarContext'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      shouldPersist={false}
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      currency="BRL"
    >
      <CartSidebarProvider>
        <Container>
          <Header />

          <Component {...pageProps} />
          <CartSidebar />
        </Container>
      </CartSidebarProvider>
    </CartProvider>
  )
}
