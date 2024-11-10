// contexts/CartContext.tsx
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Carregar carrinho do Local Storage ao iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem('coffeeCart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Salvar carrinho no Local Storage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('coffeeCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex >= 0) {
      updatedCart[itemIndex].quantity += item.quantity;
    } else {
      updatedCart.push(item);
    }
    setCart(updatedCart);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
