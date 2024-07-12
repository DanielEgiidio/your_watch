// "use client"

// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import { IconLogoGradient } from './ui/Icons'
// import Card from './ui/Card'
// import useMeasure from 'react-use-measure'
// import { animate, motion, useMotionValue } from 'framer-motion'

// const CaseCap = () => {

//   const images = [
//     "/slider/cap-01.png",
//     "/slider/cap-02.png",
//     "/slider/cap-03.png",
//     "/slider/cap-04.png",
//     "/slider/cap-05.png",
//     "/slider/cap-06.png",
//     "/slider/cap-07.png",
//     "/slider/cap-08.png",
//     "/slider/cap-09.png",
//     "/slider/cap-10.png",
//   ];

//   const FAST_DURATION = 40;
//   const SLOW_DURATION = 100;

//   const [duration, setDuration] = useState(FAST_DURATION);
//   let [ref, { width }] = useMeasure();

//   const xTranslation = useMotionValue(0);

//   const [mustFinish, setMustFinish] = useState(false);
//   const [rerender, setRerender] = useState(false);

//   useEffect(() => {
//     let controls;
//     let finalPosition = -width / 2 - 8;2

//     if (mustFinish) {
//       controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
//         ease: "linear",
//         duration: duration * (1 - xTranslation.get() / finalPosition),
//         onComplete: () => {
//           setMustFinish(false);
//           setRerender(!rerender);
//         },
//       });
//     } else {
//       controls = animate(xTranslation, [0, finalPosition], {
//         ease: "linear",
//         duration: duration,
//         repeat: Infinity,
//         repeatType: "loop",
//         repeatDelay: 0,
//       });
//     }

//     return controls?.stop;
//   }, [rerender, xTranslation, duration, width]);

//   return (
//     <section className="flexCenter flex-col ">
//       <div className="padding-container max-container w-full pb-24">
//         <IconLogoGradient className=" "/>
//         <p className="uppercase regular-18 -mt-1 mb-3 text-gray-800">
//           Nós estamos aqui por você!
//         </p>
//         <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//           <h2 className="bold-40 lg:bold-64 xl:max-w-[450px]">Seu Boné, <br /> Sua Marca!</h2>
//           <p className="regular-16 text-gray-30 xl:max-w-[520px]">Com anos de experiência no mercado, já ajudamos inúmeras empresas a se destacarem com bonés que não apenas chamam a atenção, mas também criam uma conexão duradoura com seus clientes e colaboradores.</p>
//         </div>
//       </div>

//       <div className="flexCenter max-container relative w-full py-48">
//         <motion.div 
//           className="absolute left-0 flex gap-4"
//           ref={ref}
//           style={{ x: xTranslation }}
//           onHoverStart={() => {
//             setMustFinish(true);
//             setDuration(SLOW_DURATION);
//           }}
//           onHoverEnd={() => {
//             setMustFinish(true);
//             setDuration(FAST_DURATION);
//           }}
//         >
//         {[...images, ...images].map((item, idx) => (
//           <Card image={`${item}`} key={idx} />
//         ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default CaseCap
