"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";

// Ingeniería Vial - módulos
const modulesingVial = [
  { name: "Geología Geotecnia en obras viales", image: "/image/cursos_gpt/2gestionymanejo/1.webp" },
  { name: "Suelos y pavimentos", image: "/image/cursos_gpt/2gestionymanejo/2.webp" },
  { name: "Hidrología e hidráulica", image: "/image/cursos_gpt/2gestionymanejo/3.webp" },
  { name: "Estructuras en carreteras - puentes", image: "/image/cursos_gpt/2gestionymanejo/4.webp" },
  { name: "Metrados, costos y presupuesto cronograma en obras viales", image: "/image/cursos_gpt/2gestionymanejo/5.webp" },
  { name: "Arqueología en proyectos viales", image: "/image/cursos_gpt/2gestionymanejol/6.webp" },
  { name: "Estudio medio ambiental-derecho de vía-interferencias", image: "/image/cursos_gpt/2gestionymanejo/7.webp" },
  { name: "Diseño, construcción y mantenimiento de túneles", image: "/image/cursos_gpt/2gestionymanejo/8.webp" },
  { name: "Integración de proyectos de infraestructura vial", image: "/image/cursos_gpt/2gestionymanejo/9.webp" },
  { name: "Tráfico y carga", image: "/image/cursos_gpt/2gestionymanejo/10.webp" },
  { name: "Topografía, diseño geométrico, señalización y seguridad vial", image: "/image/cursos_gpt/2gestionymanejo/11.webp" },
];

const GraduateingVialCarousel = () => {
  const handleCardClick = (moduleName: string) => {
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      `Hola, estoy interesado en el curso "${moduleName}" y me gustaría recibir más información.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white px-6">
      <div className="py-10 relative z-10 max-w-[1400px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 3000 }}
          grabCursor
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesingVial.map((module, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative w-full h-full sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
                onClick={() => handleCardClick(module.name)}
              >
                <h3 className="sr-only">{module.name}</h3>
                <Image
                  src={module.image}
                  alt={module.name}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="rounded-xl"
                  priority={true}
                  unoptimized={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GraduateingVialCarousel;
