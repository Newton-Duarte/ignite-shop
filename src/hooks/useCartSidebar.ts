import { CartSidebarContext } from '@/contexts/CartSidebarContext'
import { useContext } from 'react'

export function useCartSidebar() {
  return useContext(CartSidebarContext)
}
