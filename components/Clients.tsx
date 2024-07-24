"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { WatchLogo } from "./ui/Icons";
// Array de objetos representando os clientes
const clientsLogos = [
  { url: "/logo01.png" },
  { url: "/logo02.png" },
  { url: "/logo01.png" },
  { url: "/logo02.png" },
  { url: "/logo01.png" },
  { url: "/logo02.png" },
  { url: "/logo01.png" },
  { url: "/logo02.png" },
  { url: "/logo01.png" },
];

const Clients = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <section
      className="py-14 md:py-24 bg-[#F8F9F8] text-zinc-900 h-full mx-auto px-4 my-24"
      id="Clients"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 md:items-end text-center gap-6">
          <div className="col-span-12 md:col-span-9 mb-6 sm:mb-12 text-start">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-9">
                <h2
                  className="bold-40 lg:bold-64 leading-none mb-6 flex"
                  // data-aos="fade-right"
                >
                  Nossos Clientes
                </h2>
                <p
                  className="lg:text-lg text-sm leading-9 opacity-70"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  Na Your Watch, nossos clientes são o centro de tudo o que
                  fazemos. Valorizamos cada um de vocês e nos esforçamos para
                  oferecer uma experiência que vá além das expectativas. Aqui
                  estão alguns dos perfis de clientes que atendemos:
                </p>
              </div>
            </div>
          </div>

          {clientsLogos.map((client, i) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
              key={i}
              data-aos="zoom-in"
            >
              <div className="bg-slate-200  rounded-lg h-full grid place-items-center p-4 lg:p-12">
                <img
                  src={client.url}
                  alt="Logo dos nossos clientes"
                  className="lg:max-h-12 max-h-8 h-auto max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
