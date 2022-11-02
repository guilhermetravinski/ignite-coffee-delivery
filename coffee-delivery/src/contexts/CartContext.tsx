import { createContext } from 'react'

type CartContextData = {
  cartItems: string
}

export const CartContext = createContext({} as CartContextData)
export function CartContextProvider() {}
