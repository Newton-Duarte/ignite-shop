import { Header as PageHeader } from '@/styles/pages/app'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'
import { useCartSidebar } from '@/hooks/useCartSidebar'
import { useShoppingCart } from 'use-shopping-cart'
import Link from 'next/link'

export function Header() {
  const { openSidebar } = useCartSidebar()
  const { cartCount } = useShoppingCart()

  return (
    <PageHeader>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <CartButton
        variant="secondary"
        productsCount={cartCount}
        onClick={openSidebar}
      />
    </PageHeader>
  )
}
