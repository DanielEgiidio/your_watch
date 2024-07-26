// path: /components/NewProducts.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelectedProducts } from "../contexts/SelectedProductsContext";

const products = [
  {
    src: "/slider/watch01.jpg",
    name: "Produto 01",
    description:
      "Um design atemporal com uma caixa de ouro e pulseira de couro marrom, perfeito para ocasiões formais.",
  },
  {
    src: "/slider/watch02.jpg",
    name: "Produto 02",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
  {
    src: "/slider/watch03.jpg",
    name: "Produto 03",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
  {
    src: "/slider/watch04.jpg",
    name: "Produto 04",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
  {
    src: "/slider/watch05.jpg",
    name: "Produto 05",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
  {
    src: "/slider/watch06.jpg",
    name: "Produto 06",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
  {
    src: "/slider/watch07.jpg",
    name: "Produto 07",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
  {
    src: "/slider/watch08.jpg",
    name: "Produto 08",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
  {
    src: "/slider/watch09.jpg",
    name: "Produto 09",
    description:
      "Um relógio com design contemporâneo, resistente à água, e funções adicionais como cronômetro, ideal para atividades esportivas.",
  },
];

interface ModalProps {
  product: { src: string; description: string; name: string };
  onClose: () => void;
  onPurchase: (product: {
    src: string;
    description: string;
    name: string;
  }) => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose, onPurchase }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handlePurchase = () => {
    onPurchase(product);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white rounded-lg shadow-lg max-w-5xl mx-auto p-4">
        <Image
          className="h-auto max-w-full rounded-lg object-cover"
          src={product.src}
          alt="Product"
          width={800}
          height={800}
          layout="responsive"
        />
        <p className="my-4 text-gray-600 lg:text-2xl text-xl">{product.name}</p>
        <p className="my-4 text-gray-500 lg:text-xl text-base max-w-2xl text-left">
          {product.description}
        </p>
        <button
          onClick={handlePurchase}
          className="bg-gray-900 hover:bg-gray-800 lg:rounded-full rounded-xl text-white font-bold lg:py-4 py-3 px-5 "
        >
          Adquirir este produto +
        </button>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-red-900 text-5xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export const NewProducts: React.FC = () => {
  const { selectedProducts, addProduct } = useSelectedProducts();
  const [modalProduct, setModalProduct] = useState<{
    src: string;
    name: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const handleProductClick = (product: {
    src: string;
    name: string;
    description: string;
  }) => {
    if (selectedProducts.find((p) => p.src === product.src)) {
      alert("Este produto já foi adicionado.");
    } else {
      setModalProduct(product);
    }
  };

  const handlePurchase = (product: {
    src: string;
    description: string;
    name: string;
  }) => {
    if (!selectedProducts.find((p) => p.src === product.src)) {
      addProduct(product);
      setModalProduct(null);
      window.location.href = "#Form";
    }
  };

  return (
    <div className="bg-[#F8F9F8]" id="Products">
      <h2
        className="bold-40 lg:bold-64 mx-auto text-center lg:py-48 py-24"
        data-aos="fade-right"
      >
        Nossos Produtos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            data-aos="fade-in"
            onClick={() => handleProductClick(product)}
            className="cursor-pointer"
          >
            <Image
              className="h-auto max-w-full rounded-lg object-cover"
              src={product.src}
              alt={`Product ${index + 1}`}
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      {modalProduct && (
        <Modal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onPurchase={handlePurchase}
        />
      )}
    </div>
  );
};
