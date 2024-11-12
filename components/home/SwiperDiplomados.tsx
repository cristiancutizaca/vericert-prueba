"use client";
import React from "react";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import Link from "next/link";

const ExpertiseSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-transparent p-10 md:p-20 max-w-screen-xl mx-auto gap-10">
      {/* Contenedor de las imágenes */}
      <div className="md:w-1/2 flex flex-col items-center gap-4 relative">
        {/* Imagen principal */}
        <div className="relative z-10">
          <Image
            src="/image/estambient.jpg" // Asegúrate de que esta ruta sea válida en tu proyecto
            alt="Mechanic working on car"
            width={400}
            height={300}
            className="rounded-lg shadow-lg ml-40"
          />
        </div>
        {/* Imagen secundaria detrás */}
        <div className="absolute top-10 left-10 -z-1">
          <Image
            src="/image/goteo.jpg" // Asegúrate de que esta ruta sea válida en tu proyecto
            alt="Secondary mechanic image"
            width={350}
            height={250}
            className="rounded-lg shadow-md opacity-80 mt-40 ml-10"
          />
        </div>

        {/* Imagen secundaria detrás */}
        <div className="absolute top-60 left-6 -z-0">
          <Image
            src="/image/fondcian.jpg" // Asegúrate de que esta ruta sea válida en tu proyecto
            alt="Secondary mechanic image"
            width={350}
            height={250}
            className="rounded-lg shadow-md opacity-50 mt-20"
          />
        </div>

        <div className="relative bottom-80 z-1 ">
          <Image
            src="/image/fondcian.jpg" // Asegúrate de que esta ruta sea válida en tu proyecto
            alt="Mechanic working on car"
            width={400}
            height={300}
            className="rounded-lg shadow-lg opacity-50 ml- "
          />
        </div>
      </div>

      {/* Contenedor de texto e información */}
      <div className="md:w-1/2 text-gray-700 dark:text-white">
        <span className="text-red-500 uppercase font-semibold">
          Know About Us
        </span>
        <h2 className="text-4xl font-extrabold my-4">
          Ventajas de Usar Vericerts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Vericerts ofrece una solución confiable y moderna para la verificación
          de documentos, proporcionando múltiples beneficios tanto para
          instituciones como para usuarios finales. Con Vericerts, las
          organizaciones pueden asegurar la autenticidad de sus certificados,
          optimizar procesos y reducir el riesgo de fraude, mientras que los
          usuarios finales disfrutan de una verificación rápida y accesible
          desde cualquier lugar.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <BsCheckCircle className="text-blue-500 w-6 h-6 mr-2" />
            <span>Confianza y Credibilidad</span>
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-blue-500 w-6 h-6 mr-2" />
            <span>Verificación Rápida y Sencilla</span>
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-blue-500 w-6 h-6 mr-2" />
            <span>Ahorro de Tiempo y Recursos</span>
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-blue-500 w-6 h-6 mr-2" />
            <span>Accesibilidad Global</span>
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-blue-500 w-6 h-6 mr-2" />
            <span>Control Total para Instituciones</span>
          </li>
          <li className="flex items-center">
            <BsCheckCircle className="text-blue-500 w-6 h-6 mr-2" />
            <span>Sostenibilidad</span>
          </li>
        </ul>

        <div className="mt-6 flex items-center space-x-4">
          <div className="bg-black text-white p-4 rounded-lg flex flex-col items-center justify-center">
            <FaTools className="w-10 h-10" />
            <span className="text-2xl font-bold">25+</span>
            <span className="text-sm">Years of experience</span>
          </div>

          {/* Botón con redirección usando legacyBehavior */}
          <Link href="/more-info" legacyBehavior>
            <a className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full font-semibold shadow-md transition duration-300">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
