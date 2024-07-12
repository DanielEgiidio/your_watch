

// import CaseCap from "@/components/CaseCap";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import { Form } from "@/components/Form";
import { NewProducts } from "@/components/NewProducts";
import About from "@/components/About";


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
  )
}


// export async function generateMetadata({
//   params: {},
// }: HomeProps): Promise<Metadata> {
//   const data = await getPageData();
//   const page = data.page;

//   return {
//     title: page.pagetitle || "Pagina Principal", 
//     description: page.heroTitle || "Você encontrou sua solução",
//     openGraph: {
//       images: [
//         {
//           url: page.pageImage?.url || 'default-url', // Provide a default URL here
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// }