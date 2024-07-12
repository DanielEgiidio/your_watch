"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

import Aos from "aos";
import "aos/dist/aos.css";

const products = [
  "/slider/product01.png",
  "/slider/product02.png",
  "/slider/product03.png",
  "/slider/product04.png",
  "/slider/product05.png",
  "/slider/product06.png",
  "/slider/product07.png",
  "/slider/product08.png",
  "/slider/product09.png",
  "/slider/product10.png",
  "/slider/product11.png",
  "/slider/product12.png",
];

export function NewProducts() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="bg-[#F8F9F8]" id="Products">
      <h2 className="bold-40 lg:bold-64 mx-auto text-center lg:py-48 py-24" data-aos="fade-right">Nossos Produtos</h2>  
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} data-aos="fade-in">
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
    </div>
  );
}
