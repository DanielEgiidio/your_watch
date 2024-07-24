"use client";

import React, { useEffect } from "react";
import { IconLogo, WatchLogo } from "./ui/Icons";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden bg-white lg:pt-32 pt-32" id="About">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4" data-aos="fade-right">
            <div className="lg:max-w-lg">
              <Link
                href="/"
                className="flex items-center space-x-3 mb-12 rtl:space-x-reverse"
                data-aos="fade-right"
              >
                <WatchLogo className="fill-black lg:w-[60px] h-[50px] w-[50px]" />
                <span className="font-bold text-lg md:text-3xl text-black">
                  Your Watch
                </span>
              </Link>
              <p className="mt-2 lg:bold-52 bold-40 tracking-tight text-gray-900 sm:text-4xl">
                Sobre Nós
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                Your Watch nasceu da paixão por colecionar e apreciar a beleza
                dos relógios de pulso, tanto antigos quanto novos. Fundada com a
                missão de oferecer uma curadoria cuidadosa e uma experiência
                personalizada, nossa empresa se dedica a encontrar peças únicas
                que contam histórias e marcam momentos especiais.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      className="absolute left-1 top-1 h-5 w-5 fill-indigo-600"
                    >
                      <path d="M890.378 185.931V98.92l-394.703 87.011h-33.281L67.691 98.92v87.011H26.205v695.564h431.986v.957l4.205-.957h33.281l4.205.957v-.957H997.8V185.931H890.379zm-780.995 0v-35.199l348.804 76.934v603.011l-348.804-76.973V185.93zm739.339-35.277v602.969l-348.844 76.934V227.588l348.844-76.934zM961.559 558.27h-48.986v-49.111h48.986v49.111zM88.513 831.553v-39.819l180.482 39.819H88.513zm787.95-41.402v41.319H689.109l187.354-41.319zM411.698 339.134l-258.582-86.096 5.747-17.164 7.497-22.368 258.582 86.096-13.247 39.529zm0 111.668-258.582-86.096 13.164-39.529 258.582 86.096-13.164 39.529zm0 111.716-258.582-86.096 13.164-39.529 258.582 86.096-13.164 39.529zm0 111.588-258.582-86.055 13.164-39.529 258.582 86.055-13.164 39.529zm0 98.845-258.582-86.055 13.164-39.529 258.582 86.055-13.164 39.529zm134.707-433.817-13.164-39.529 258.54-86.096 7.497 22.368 5.79 17.164-258.666 86.096zm0 111.668-13.164-39.529 258.54-86.096 13.164 39.529-258.54 86.096zm0 111.716-13.164-39.529 258.54-86.096 13.164 39.529-258.54 86.096zm0 111.588-13.164-39.529 258.54-86.055 13.164 39.529-258.54 86.055zm0 98.845-13.164-39.529 258.54-86.055 13.164 39.529-258.54 86.055z" />
                    </svg>
                    Nossa Cultura.
                  </dt>
                  <dd className="inline">
                    &nbsp; Na Your Watch, acreditamos que cada segundo conta.
                    Nossa paixão pelo tempo se reflete na dedicação em oferecer
                    relógios que não apenas marcam horas, mas contam histórias.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="absolute left-1 top-1 h-5 w-5 fill-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                    </svg>
                    Personalização e Exclusividade.
                  </dt>
                  <dd className="inline">
                    &nbsp; Entendemos que cada cliente é único. Por isso,
                    oferecemos serviços de personalização para garantir que cada
                    relógio reflita o estilo e a personalidade de quem o usa.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <WatchLogo className="absolute left-1 top-1 h-6 w-8 fill-indigo-600" />
                    Excelência no Atendimento.
                  </dt>
                  <dd className="inline">
                    &nbsp; A satisfação do cliente é nossa prioridade.
                    Oferecemos um atendimento excepcional, garantindo uma
                    experiência de compra única e memorável.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/watchAbout.jpg"
            alt="Product screenshot"
            data-aos="fade-down"
            data-aos-delay="400"
            className="lg:w-[36rem] lg:max-h-full max-w-none rounded-xl object-contain shadow-xl ring-1 ring-gray-400/10 w-[23rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
