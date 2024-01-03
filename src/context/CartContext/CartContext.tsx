"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartProduct, Product } from "@/types/types";

interface CartContextProps {
  cartProducts: CartProduct[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartProducts: [],
  addProduct: (product: Product) => {},
  removeProduct: (productId: number) => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartProducts");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  const addProduct = (product: Product) => {
    setCartProducts((prevProducts) => {
      const productExist = prevProducts.find((p) => p.id === product.id);

      if (productExist) {
        return prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...prevProducts, { ...product, quantity: 1 }];
    });
  };

  const removeProduct = (productId: number) => {
    setCartProducts((prevProducts) => {
      const productExist = prevProducts.find((p) => p.id === productId);

      if (productExist && productExist.quantity > 1) {
        return prevProducts.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p,
        );
      }
      return prevProducts.filter((p) => p.id !== productId);
    });
  };

  return (
    <CartContext.Provider value={{ cartProducts, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
