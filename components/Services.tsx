"use client";

import { FEATURES } from "@/constants";
import Image from "next/image";
import React, { useEffect } from "react";
import { Cap } from "./ui/Icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
      className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat my-40"
      id="Services"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[800px]" data-aos="zoom-in">
          <Image
            src="/watchPhone.png"
            alt="test"
            width={340}
            height={800}
            className="feature-phone"
          />
        </div>

        <div className=" flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Nossos Serviços</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <ServiceItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type ServiceItem = {
  title: string;
  icon: string;
  description: string;
};

const ServiceItem = ({ title, icon, description }: ServiceItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start" data-aos="zoom-in">
      <div className="rounded-full p-4 lg:p-7 bg-gray-900">
        <Image
          src={icon}
          alt="map"
          width={28}
          height={28}
          className="w-6 h-6 lg:w-8 lg:h-8"
        />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Services;
