import { createContext, useState } from 'react'

//1. create context
export const CartContext = createContext()

//2. create provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    //check if the product is already in the cart:
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    //if the product is in the cart:
    if (productInCartIndex >= 0) {
      //Another way using structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    //if the product isn't in the cart:
    setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      //3. Consume the context in all children
      {children}
    </CartContext.Provider>
  )
}
