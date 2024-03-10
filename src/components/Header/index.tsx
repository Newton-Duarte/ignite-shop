import { Header as PageHeader } from '@/styles/pages/app'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'
import { useCartSidebar } from '@/hooks/useCartSidebar'

export function Header() {
  const { openSidebar } = useCartSidebar()

  return (
    <PageHeader>
      <Image src={logoImg} alt="" />
      <CartButton variant="secondary" productsCount={1} onClick={openSidebar} />
    </PageHeader>
  )
}
