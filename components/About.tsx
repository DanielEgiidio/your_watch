"use client"

import React, { useEffect } from 'react'
import { IconLogo } from './ui/Icons'
import Aos from 'aos'
import "aos/dist/aos.css";

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
              <div className="flex ">
                <IconLogo/>
                <h2 className="bold-32 items-center flex justify-center text-gray-900">
                  Jairo cap
                </h2>
              </div>
              <p className="mt-2 lg:bold-52 bold-40 tracking-tight text-gray-900 sm:text-4xl">
                Quem Somos ?!
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                A JairoCap é uma empresa que se destacou no mercado através da determinação e visão de seu fundador,
                que viajou por todo o Brasil no estilo caixeiro viajante, visitando comércios em diversos estados.
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
                    &nbsp; Criar vínculos fortes com empresas de diferentes segmentos e fazer muitos amigos, muitos dos
                    quais permanecem clientes fiéis até hoje, a JairoCap consolidou sua presença no mercado.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg stroke="currentColor" 
                    fill="currentColor" 
                    stroke-width="0" 
                    viewBox="0 0 16 16"
                    className="absolute left-1 top-1 h-5 w-5 fill-indigo-600" 
                    xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708">
                    </path></svg>
                    Expansão do Mercado.
                  </dt>
                  <dd className="inline">
                    &nbsp; Em 2018, a JairoCap expandiu rapidamente pelo Brasil, superando o alcance das redes sociais com marketing
                    humanizado, colocando a marca dos clientes na cabeça de funcionários, clientes e amigos.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <IconLogo className="absolute left-1 top-1 h-8 w-8 fill-indigo-600" />
                    JairoCap Online.
                  </dt>
                  <dd className="inline">
                    &nbsp; Focada em aproximar marcas e pessoas. Seu objetivo não é apenas vender, mas criar
                    vínculos duradouros com clientes, comprometendo-se com a qualidade dos produtos e transformando clientes em parceiros e
                    amigos para a vida toda.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/equipe.jpg"
            alt="Product screenshot"
            data-aos="fade-left"
            data-aos-delay="400"
            className="lg:w-[44rem] lg:max-h-[70%] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-[23rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>

  )
}

export default About