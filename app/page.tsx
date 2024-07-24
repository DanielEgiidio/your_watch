// import CaseCap from "@/components/CaseCap";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import { Form } from "@/components/Form";
import { NewProducts } from "@/components/NewProducts";
import About from "@/components/About";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      {/* <CaseCap /> */}
      <Services />
      <NewProducts />
      <FAQ />
      <Form />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  // Definir título, descrição e imagem padrão para compartilhamento
  const title = "Your Watch – Relógios Exclusivos e Sofisticados";
  const description =
    "Descubra uma seleção exclusiva de relógios de pulso, combinando modelos vintage com designs modernos. Encontre o relógio perfeito para cada momento.";
  const imageUrl = "/watchHero"; // Substitua pelo URL da imagem padrão

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
