"use client";

import Image from "next/image";
import { CapIcon, IconLogo } from "./ui/Icons";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <section className="bg-white min-h-screen overflow-hidden lg:max-h-full mx-auto padding-container space-x-0 lg:space-x-12 background-map">
      <header className="lg:max-w-screen-2xl max-w-full flex flex-wrap items-center justify-between mx-auto lg:p-4 p-1">
        <Link 
          href="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse"
          data-aos="fade-right"
          >
          <IconLogo className="fill-white lg:w-[90px] w-[50px]" />
          <span 
            className="font-bold text-lg md:text-3xl mb-2 md:mb-6 text-white"
            
          >
            Jairo Cap
          </span>
        </Link>

        <Link
          href="#Form"
          className="lg:py-3.5 lg:px-5 flex items-center justify-center lg:mr-10 ml-12 bg-gray-900 hover:bg-gray-800 rounded-full text-white lg:text-base text-sm py-2 px-3"
          data-aos="fade-left"
        >
          Faça seu Pedido
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl md:text-6xl text-white text-center w-full md:w-[900px] mx-auto mt-14 md:mt-28 font-sans font-[500]">
          Eleve a Presença da Sua Marca com Nossos Bonés Exclusivos!
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full md:w-[70vw] mx-auto mt-10 md:mt-12">
          <div className="flex flex-col md:w-[600px] lg:mr-12">
            <h2 className="text-white font-normal lg:text-lg text-sm text-center md:w-[600px] mx-auto" data-aos="zoom-in">
              Bonés exclusivos que potencializam sua marca, equipe ou evento. Com anos de experiência e milhares de bonés feitos sob medida, ajudamos empresas em todo o Brasil a se destacarem.
            </h2>
            <div className="flex flex-col md:flex-row mt-10 md:mt-20 items-center justify-center space-x-6 ">
              <Link href="#Form" className="flex flex-row bg-gray-900 hover:bg-gray-800 py-5 px-6 w-full md:w-[270px] rounded-full cursor-pointer justify-between shadow-lg mb-4 md:mb-0" data-aos="fade-up" data-aos-delay="200">
                <p className="text-white text-center">Faça seu Pedido</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  color="white"
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"></path>
                </svg>
              </Link>
              <Link
                href="#Products"
                className="flex flex-row bg-white py-5 px-6 w-full md:w-[270px] rounded-full cursor-pointer justify-between shadow-lg"
                data-aos="fade-up" data-aos-delay="200"
              >
                <p className="text-black">Nossos Produtos</p>
                <CapIcon className="w-[28px] h-[28px]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center mt-10">
          <Image src="/slider/cap-02.png" width={500} height={300} alt="hero" data-aos="zoom-in"/>
        </div>
      </main>
    </section>
  );
};

export default Hero;
