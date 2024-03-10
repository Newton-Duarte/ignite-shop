import { PropsWithChildren, createContext, useState } from 'react'

type CartSidebarContextData = {
  isSidebarOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
}

export const CartSidebarContext = createContext({} as CartSidebarContextData)

export function CartSidebarProvider({ children }: PropsWithChildren) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <CartSidebarContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </CartSidebarContext.Provider>
  )
}
