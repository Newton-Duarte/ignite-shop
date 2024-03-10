import { Header } from '@/components/Header'
import { CartSidebar } from '@/components/CartSidebar'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import { CartSidebarProvider } from '@/contexts/CartSidebarContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartSidebarProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
        <CartSidebar />
      </Container>
    </CartSidebarProvider>
  )
}
