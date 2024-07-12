// path: /components/Form.tsx
"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Olá, tenho interesse em adquirir os serviços da JairoCap.%0A%0ANome: ${formData.firstname}%0AÚltimo nome: ${formData.lastname}%0AEmail: ${formData.email}%0ACelular: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/558399990100?text=${message}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section className="py-[250px] bg-[#F8F9F8] px-4" id="Form">
      <h2 className="lg:bold-52 bold-40 text-center pb-8">Gostou dos nossos serviços?!</h2>
      <h3 className="lg:bold-40 bold-32 text-center pb-8 text-green-600">Faça agora seu pedido!</h3>
      <p className="text-neutral-600 lg:regular-18 text-sm max-w-lg my-2 text-center mx-auto pb-6 lg:px-0 px-4">
        Entre em contato com um dos nossos atendentes! <br/> preencha o formulário para receber mais informações
      </p>
      <div className="max-w-xl w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input ">
        <h2 className="font-bold text-xl text-neutral-800 ">
          Formulário de Contato
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 ">
          Por favor preencha todos os campos do formulário
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Nome</Label>
              <Input id="firstname" placeholder="José" type="text" value={formData.firstname} onChange={handleChange} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Último nome</Label>
              <Input id="lastname" placeholder="Araujo" type="text" value={formData.lastname} onChange={handleChange} />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="josearaujoexemplo@gmail.com" type="email" value={formData.email} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Celular (Whatsapp)</Label>
            <Input id="phone" placeholder="83999010101" type="text" value={formData.phone} onChange={handleChange} />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn flex justify-center items-center bg-gray-900 hover:bg-gray-800 rounded-full  w-full text-white h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
            type="submit"
          >
            Entrar em Contato
            <svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              className="w-6 h-6 ml-2"
              viewBox="0 0 512 512" 
              height="24px" 
              width="24px"      
              xmlns="http://www.w3.org/2000/svg"><path  
              fill-rule="evenodd" 
              d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z">
              </path>
            </svg>
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300  to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
