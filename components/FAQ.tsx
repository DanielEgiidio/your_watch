"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Como funciona a quantidade mínima?",
    answer: `Você pode fazer a partir de 30 unidades idênticas. Mas tem que ser idênticos mesmo, tá? 🙂 Não pode ter variações. Isso ocorre pois temos uma produção em série, para grandes volumes.`,
    link: "#Form"
  },
  {
    question: "Como funciona o prazo de fabricação?",
    answer: `
        O prazo de fabricação se inicia no momento em que o orçamento é aprovado e o cliente paga a primeira parcela. A partir desse dia, se contam de 25 à 30 dias úteis para o seu pedido ficar pronto para despacho. Após o prazo de fabricação, o consultor de pós-vendas vai te contactar para que haja a quitação do pedido e para que o mesmo seja despachado. A partir daí, se iniciará a contagem do prazo de envio, que pode variar da empresa e modalidade escolhida pelo cliente.
    `,
    link: "#Form"
  },
  {
    question: "Detalhes técnicos dos bonés",
    answer: `
        Trucker
        Frente firme (peça única), aba curva revestida de tecido e com 5 costuras, tela de poliéster na copa (laterais e traseira) e fecho plástico ajustável.
        Americano
        Frente firme (peça única), aba curva revestida de tecido e com 5 costuras, revestimento de tecido na copa (laterais e traseira) e fecho plástico ajustável.
        Aba Reta
        Frente firme (peça única), aba reta revestida de tecido e com 5 costuras, revestimento de tecido na copa (laterais e traseira) e fecho plástico ajustável.
        Viseira Padrão
        Toda revestida em tecido, regulador de plástico, aba curva flexível.
        6 gomos
        Frente firme (divida em 2 gomos), aba curva revestida de tecido e com 5 costuras, tela de poliéster ou tecido na copa (laterais e traseira) e fecho plástico ajustável.
        Dad hat
        Frente flexível (peça única), aba curva revestida de tecido e com 8 costuras, revestimento de tecido na copa (laterais e traseira) e fecho fitão tecido.
    `,
    link: "#Form"
  },
  {
    question: "Formas de pagamento",
    answer: `
          O pagamento pode ser feito por meio de PIX, ou transferencia bancaria. Quem decide sempre é o cliente. O pagamento será dividido em duas etapas, 50% no ato do pedido e 50% no momento que o pedido tem sua fabricação finalizada. Já na opção de cartão de crédito, é pago 100% no ato do pedido, por meio do mercado pago, com um acréscimo de 6% no valor total do pedido.
    `,
    link: "#Form"
  },
  {
    question: "Como funciona todo o processso?",
    answer: `
      O nosso atendimento é feito via whatsapp, mas não se preocupe, é simples e rápido. Nossos consultores comerciais irão sanar quaisquer dúvidas, e nossa equipe de design fará a montagem dos layouts. Após finalizados, os enviaremos para sua aprovação, e depois disso iniciaremos a fabricação dos produtos. Por fim, a mercadoria será enviada para o seu endereço, em qualquer lugar do Brasil.
    `,
    link: "#Form"
  },
  {
    question: "Vocês enviam para todo o Brasil?",
    answer: `
      Sim, enviamos. Hoje 95% de nossa produção é para fora do nosso estado. Enviamos com rapidez para toda e qualquer cidade do Brasil.
    `,
    link: "#Form"
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto my-8 p-8 lg:pt-[14rem] pt-[10rem]" id="FAQ">
      <h1 className="lg:bold-52 bold-32 font-bold text-center lg:pb-[6rem] pb-[4rem]">Para sanar suas dúvidas!</h1>
      <div id="accordion-open" data-accordion="open" className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            <h2 id={`accordion-open-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-8 font-medium text-gray-500 border-b-2 shadow-md gap-3 ${
                  openIndex === index ? 'bg-gray-100' : ''
                }`}
                data-accordion-target={`#accordion-open-body-${index + 1}`}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-open-body-${index + 1}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {faq.question}
                </span>
                <svg
                  data-accordion-icon=""
                  className={`w-3 h-3 ${openIndex === index ? 'rotate-180 transition ease' : 'transition ease'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`accordion-open-body-${index + 1}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  aria-labelledby={`accordion-open-heading-${index + 1}`}
                >
                  <div className="p-5 border-t-2 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faq.answer.split('\n').map((text, i) => (
                        <span key={i}>{text}<br /></span>
                      ))}
                    </p>
                    {faq.link && (
                      <p className="text-gray-500 dark:text-gray-400">
                        <a
                          href={faq.link}
                          className="text-black hover:underline"
                        >
                          Faça já seu pedido
                        </a>
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
