// PrincipalHome.js
"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./stylesHome.css";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import HeroImage from "./hero-image"; // Asegúrate de que la ruta sea correcta

const PrincipalHome = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // Ajuste de padding-top para dejar espacio debajo del Navbar
    <section className="relative flex justify-center items-center pt-20 md:pt-32 lg:pt-40 pl-8 bg-fixed bg-gradient-to-r  dark:from-fondDark dark:to-fondDark">
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-blue-200 to-transparent right-[11%] top-0 hidden md:block"></div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-sky-950 from-violet-200 right-96 top-10 "></div>
      <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial dark:from-cyan-950 from-blue-100 to-transparent left-[10%] top-[10%] hidden md:block"></div>
      
      {/* Botón para cambiar de tema */}
      <button
        className="fixed z-50 top-16 right-0 mr-3 p-2 flex items-center justify-center"
        onClick={handleThemeChange}
      >
        <Image
          src={theme === "light" ? "/image/bulb_on.png" : "/image/bulb.png"}
          className="block md:hidden w-10 h-10 object-contain"
          alt="Home Image"
          width={35}
          height={35}
        />
      </button>

      <div className="py-8 lg:py-10 max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row items-start w-full">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100, x: "-100%" },
            visible: {
              x: 0,
              opacity: 1,
              y: 0,
              transition: { duration: 2 },
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 100, duration: 0.9 }}
          className="flex-1 md:mt-16"
        >
          <h1 className="mb-4">
            <TypeAnimation
              sequence={[
                "Bienvenido a",
                5000,
                "Únete a ",
                5000,
                "Sé parte de",
                5000,
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-gray-700 dark:text-white text-5xl md:text-5xl lg:text-6xl font-semibold"
            />
          </h1>
          <h1 className="text-[#009FB2] text-7xl md:text-6xl lg:text-7xl font-extrabold mb-2">
            VERICERTS
          </h1>
          <p className="mb-8 max-w-lg font-normal text-2xl md:text-xl lg:text-2xl text-gray-50">
            {/* Contenido adicional puede ir aquí */}
          </p>
          <Link href="/diplomados" passHref legacyBehavior>
            <button className="hover:animate-pulse bg-blue-100 border-blue-200 border text-primaryblue rounded-full inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center hover:scale-105 focus:ring-4 focus:ring-blue-300">
              Ver Diplomados
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </motion.div>
        
        {/* HeroImage para pantallas grandes */}
        <motion.div
          className="hidden md:block md:mr-5 mt-8 md:mt-0 moveArrow"
          variants={{
            hidden: { opacity: 0, y: 100, x: "100%" },
            visible: {
              x: 0,
              opacity: 1,
              y: 0,
              transition: { duration: 2 },
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 100, duration: 0.9 }}
        >
          <HeroImage /> {/* Renderizamos el componente HeroImage */}
        </motion.div>

        {/* HeroImage para dispositivos móviles (debajo del texto) */}
        <div className="block md:hidden mt-8">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default PrincipalHome;
