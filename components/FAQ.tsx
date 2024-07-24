"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Quais são os tipos de relógios disponíveis na Your Watch?",
    answer: `
        Na Your Watch, oferecemos uma curada seleção de relógios de pulso, que abrange desde modelos vintage atemporais até designs modernos e inovadores. Cada peça é meticulosamente escolhida para garantir qualidade e exclusividade, refletindo o melhor de ambas as eras do horologismo.
        `,
    link: "#Form",
  },
  {
    question: "Como posso personalizar meu relógio?",
    answer: `
        Oferecemos um serviço de personalização exclusivo que permite aos nossos clientes criar um relógio que realmente reflita sua personalidade e estilo. Você pode selecionar os materiais, cores, mostradores e até adicionar gravações personalizadas. Nosso time de especialistas estará à disposição para guiá-lo em cada passo do processo, garantindo um resultado impecável.
    `,
    link: "#Form",
  },
  {
    question: " Qual é a política de garantia da Your Watch?",
    answer: `
        Todos os nossos relógios são acompanhados por uma garantia de 2 anos, que cobre quaisquer defeitos de fabricação. Além disso, oferecemos uma garantia estendida opcional para proporcionar ainda mais tranquilidade. Nossa equipe de atendimento ao cliente está sempre pronta para assisti-lo com qualquer dúvida ou necessidade de assistência.
    `,
    link: "#Form",
  },
  {
    question: "Quais são as opções de pagamento disponíveis na Your Watch?",
    answer: `
          Aceitamos cartões de crédito, débito, transferências bancárias e plataformas digitais seguras. Sua transação será realizada com total segurança e discrição. Para assistência, nossa equipe está sempre à disposição.
    `,
    link: "#Form",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="max-w-6xl mx-auto my-8 p-8 lg:pt-[14rem] pt-[10rem]"
      id="FAQ"
    >
      <h1 className="lg:bold-52 bold-32 font-bold text-center lg:pb-[6rem] pb-[4rem]">
        Para sanar suas dúvidas!
      </h1>
      <div id="accordion-open" data-accordion="open" className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <h2 id={`accordion-open-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-8 font-medium text-gray-500 border-b-2 shadow-md gap-3 ${
                  openIndex === index ? "bg-gray-100" : ""
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
                  className={`w-3 h-3 ${
                    openIndex === index
                      ? "rotate-180 transition ease"
                      : "transition ease"
                  } shrink-0`}
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
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  aria-labelledby={`accordion-open-heading-${index + 1}`}
                >
                  <div className="p-5 border-t-2 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faq.answer.split("\n").map((text, i) => (
                        <span key={i}>
                          {text}
                          <br />
                        </span>
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
};

export default FAQ;
