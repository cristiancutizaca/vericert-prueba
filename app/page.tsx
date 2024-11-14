"use client";
import dynamic from "next/dynamic";
const PrincipalHome = dynamic(() => import("@/components/home/PrincipalHome"));
const PorqueNosotros = dynamic(
  () => import("@/components/home/PorqueNosotros")
);
const SwiperCarrouselDiplomados = dynamic(
  () => import("@/components/home/SwiperDiplomados")
);
const CarouselCursosDestacados = dynamic(
  () => import("@/components/home/SwiperCursosDestacados")
);
const TestimoniosFb = dynamic(() => import("@/components/home/TestimoniosFb"));
//const QuienesSomos = dynamic(() => import("@/components/home/QuienesSomos"));
const NuestrosDiplomados = dynamic(
  () => import("@/components/home/NuestrosDiplomados")
);
const ContactForm = dynamic(() => import("@/components/home/ContactForm"));
const ScrollToBotButton = dynamic(() => import("@/components/home/bounceDown"));
const LogosCarrousel = dynamic(
  () => import("@/components/home/logosCarrousel")
);

export default function Main() {
  return (
    <main className="relative z-0 bg-gradient-to-r  from-[#e0f9f6] to-[#e0f9f6] ">
      {/* Botón para cambiar de tema */}
      <div className=" bg-gradient-to-r  from-cyan-450 to-blue-500  dark:bg-fondDark  ">
        <PrincipalHome />
      </div>
      {/*  <div className="bg-blue-500  dark:bg-fondDark ">
        <QuienesSomos />
      </div> */}
      <div className=" dark:bg-fondDark">
        <LogosCarrousel />
      </div>
      <div className=" dark:bg-fondDark">
        <NuestrosDiplomados />
      </div>
      <div className=" dark:bg-fondDark">
        <SwiperCarrouselDiplomados />
      </div>
      <div className=" dark:bg-fondDark ">
        <PorqueNosotros />
      </div>
      <div className="  dark:bg-fondDark ">
        <CarouselCursosDestacados />
      </div>
      <div className=" dark:bg-fondDark ">
        <TestimoniosFb />
      </div>

      <div className=" dark:bg-fondDark ">
        <ContactForm />
      </div>

      <div className=" dark:bg-fondDark">
        <ScrollToBotButton />
      </div>
    </main>
  );
}
