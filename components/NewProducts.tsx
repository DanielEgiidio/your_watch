"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css";

const products = [
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
      <h2
        className="bold-40 lg:bold-64 mx-auto text-center lg:py-48 py-24"
        data-aos="fade-right"
      >
        Nossos Produtos
      </h2>
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
