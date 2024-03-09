import { createContext } from 'react'

type SidebarContextProps = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const SidebarContext = createContext({} as SidebarContextProps)
