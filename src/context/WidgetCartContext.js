import React, { createContext, useContext, useState } from 'react'


export const AppContext = createContext();
export const useWidgetCartContext = () => useContext(AppContext);

const WidgetCartContextProvider = ({ children }) => {
    const [widgetCounter, setWidgetCounter] = useState(0);
    const [displayCart1, setDisplayCart] = useState(false);
    const openCart = () => setDisplayCart(true);
    const toggleCart = () => setDisplayCart(!displayCart1);
  return (
    <AppContext.Provider value={[widgetCounter, setWidgetCounter, openCart, toggleCart, displayCart1]}>
        {children}
    </AppContext.Provider>
  )
}

export default WidgetCartContextProvider