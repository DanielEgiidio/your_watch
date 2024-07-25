"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const products: string[] = [
  "/slider/watch01.jpg",
  "/slider/watch02.jpg",
  "/slider/watch03.jpg",
  "/slider/watch04.jpg",
  "/slider/watch05.jpg",
  "/slider/watch06.jpg",
  "/slider/watch07.jpg",
  "/slider/watch08.jpg",
  "/slider/watch09.jpg",
];

interface ModalProps {
  product: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white  rounded-lg shadow-lg max-w-5xl mx-auto">
        <Image
          className="h-auto max-w-full rounded-lg object-cover"
          src={product}
          alt="Product"
          width={800}
          height={800}
          layout="responsive"
        />
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
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const handleProductClick = (product: string) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
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
              src={product}
              alt={`Product ${index + 1}`}
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};
