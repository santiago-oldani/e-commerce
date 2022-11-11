import React, { createContext, useContext } from 'react'


export const AppContext = () => createContext();
export const useMyContext = () => useContext(AppContext);

const CartContext = ({ children }) => {
    const [state, setState] = useContext()
  return (
    <AppContext value={[]}>
        {children}
    </AppContext>
  )
}

export default CartContext