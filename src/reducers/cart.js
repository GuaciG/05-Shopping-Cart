//using useReducer
//initialState:
export const cartInitialState = []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

//reducer:
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      //if the product is in the cart:
      if (productInCartIndex >= 0) {
        //Another way using structuredClone
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      //if the product isn't in the cart:
      return [
        ...state,
        {
          ...actionPayload, //product
          quantity: 1
        }
      ]
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      return cartInitialState
    }
  }

  return state
}
