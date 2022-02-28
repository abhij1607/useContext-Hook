import { createContext, useContext, useState } from "react";

const defaultValue = { items: 6 };

const CartContext = createContext(defaultValue);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(4);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
