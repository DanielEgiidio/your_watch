// path: /components/Form.tsx
"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/utils/cn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Image from "next/image";
import { useSelectedProducts } from "../contexts/SelectedProductsContext";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { selectedProducts, removeProduct } = useSelectedProducts();

  const handleRemoveProduct = (src: string) => {
    removeProduct(src);
  };

  const handleAddMore = () => {
    window.location.href = "#Products";
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const products = selectedProducts.map((p) => p.src).join(", ");
    const message = `Olá, tenho interesse em adquirir os serviços da JairoCap.%0A%0ANome: ${data.firstname}%0AÚltimo nome: ${data.lastname}%0AEmail: ${data.email}%0ACelular: ${data.phone}%0AProdutos: ${products}`;
    const whatsappUrl = `https://wa.me/558399990100?text=${message}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section className="py-[250px] bg-[#F8F9F8] px-4" id="Form">
      <h2 className="lg:bold-52 bold-40 text-center pb-8">
        Gostou dos nossos serviços?!
      </h2>
      <h3 className="lg:bold-40 bold-32 text-center pb-8 text-green-600">
        Faça agora seu pedido!
      </h3>
      <p className="text-neutral-600 lg:regular-18 text-sm max-w-lg my-2 text-center mx-auto pb-6 lg:px-0 px-4">
        Entre em contato com um dos nossos atendentes! <br /> preencha o
        formulário para receber mais informações
      </p>
      <div className="max-w-xl w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input ">
        <h2 className="font-bold text-xl text-neutral-800 ">
          Formulário de Contato
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 ">
          Por favor preencha todos os campos do formulário
        </p>

        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Nome</Label>
              <Input
                id="firstname"
                placeholder="José"
                type="text"
                {...register("firstname", { required: "Nome é obrigatório" })}
              />
              {errors.firstname && (
                <p style={{ color: "red" }}>{errors.firstname.message}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Último nome</Label>
              <Input
                id="lastname"
                placeholder="Araujo"
                type="text"
                {...register("lastname", {
                  required: "Último nome é obrigatório",
                })}
              />
              {errors.lastname && (
                <p style={{ color: "red" }}>{errors.lastname.message}</p>
              )}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="josearaujoexemplo@gmail.com"
              type="email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido. Por favor, insira um email válido.",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Celular (Whatsapp)</Label>
            <Input
              id="phone"
              placeholder="83999010101"
              type="text"
              {...register("phone", {
                required: "Celular é obrigatório",
                pattern: {
                  value: /^\d+$/,
                  message:
                    "Celular inválido. Por favor, insira um número válido.",
                },
              })}
            />
            {errors.phone && (
              <p style={{ color: "red" }}>{errors.phone.message}</p>
            )}
          </LabelInputContainer>
          {selectedProducts.length > 0 && (
            <div className="mb-4">
              <Label>Produtos Selecionados</Label>
              <div className="flex flex-col space-y-2 mt-2">
                {selectedProducts.map((product, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={product.src}
                      alt="Produto selecionado"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <span>{product.name}</span>
                    <button
                      onClick={() => handleRemoveProduct(product.src)}
                      className="text-red-600 hover:text-red-800"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button
            onClick={handleAddMore}
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-4"
            type="button"
          >
            Adicionar mais produtos +
          </button>
          <button
            className="bg-gradient-to-br relative group/btn flex justify-center items-center bg-gray-900 hover:bg-gray-800 rounded-full w-full text-white h-14 mt-2 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
            type="submit"
          >
            Entrar em Contato
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
