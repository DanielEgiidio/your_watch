"use client";

// path: /contexts/SelectedProductsContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Product {
  src: string;
  name: string;
  description: string;
}

interface SelectedProductsContextProps {
  selectedProducts: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (src: string) => void;
}

const SelectedProductsContext = createContext<
  SelectedProductsContextProps | undefined
>(undefined);

export const SelectedProductsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const storedProducts = localStorage.getItem("selectedProducts");
      return storedProducts ? JSON.parse(storedProducts) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(selectedProducts)
      );
    }
  }, [selectedProducts]);

  const addProduct = (product: Product) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
      }
      return updatedProducts;
    });
  };

  const removeProduct = (src: string) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.src !== src
      );
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
      }
      return updatedProducts;
    });
  };

  return (
    <SelectedProductsContext.Provider
      value={{ selectedProducts, addProduct, removeProduct }}
    >
      {children}
    </SelectedProductsContext.Provider>
  );
};

export const useSelectedProducts = () => {
  const context = useContext(SelectedProductsContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedProducts must be used within a SelectedProductsProvider"
    );
  }
  return context;
};
