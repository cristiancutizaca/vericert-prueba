"use client";
import Curso from "./diplomadosAccordion";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
interface CursoData {
  id: string;
  area: string;
  titulo: string;
  imagen: string;
  fechaInicio: string;
  modalidad: string;
  duracion: string;
  horas: string;
  descripcion: string;
  modulos: string[];
}
const DiploAgronoma = () => {
  const searchParams = useSearchParams();
  const cursoParam = searchParams.get("curso"); // Obtener el valor de 'curso' del URL

  // Crear un ref para cada curso
  const cursosRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // Array de objetos que contienen los datos de cada curso
  const cursosData: CursoData[] = [
    {
      id: "riego-tecnificado",
      area: "",
      titulo: "Sistemas de Riego Tecnificado",
      imagen: "/diplo/9.webp",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Gerentes de proyectos, residentes y supervisores de obras. Ingenieros agrícolas, agrónomos, civiles, hidráulicos y todos los profesionales que manejen proyectos y ejecución de obras con riego tecnificado. Bachilleres y estudiantes universitarios de los últimos ciclos de ingeniería agrícola, agronomía, civil, hidráulica, forestal.",
      modulos: [
        "Importancia del suelo en la agricultura.",
        "Hidráulica de tuberías.",
        "Descarga de data y parámetros geomorfológicos de la cuenca.",
        "Calidad del agua para riego.",
        "Oferta y demanda hídrica en cultivos.",
        "Sistemas de riego tecnificado por aspersión.",
        "Sistemas de riego tecnificado por goteo.",
        "Fertiirrigación.",
        "Análisis de suelo, agua y foliar.",
      ],
    },
    {
      id: "fertirriego",
      area: "",
      titulo: "Riego y Fertirriego",
      imagen: "/diplo/10.webp",
      fechaInicio: "31/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Gerentes de proyectos, residentes y supervisores de obras. Ingenieros agrícolas, agrónomos, civiles, hidráulicos y todos los profesionales que manejen proyectos y ejecución de obras con riego tecnificado. Bachilleres y estudiantes universitarios y técnicos de los últimos ciclos de ingeniería agrícola, agronomía, civil, hidráulica, forestal y carreras afines.",
      modulos: [
        '-'
        /*
        "Riego tecnificado por aspersión",
        "Riego tecnificado por goteo",
        "Fertirrigación",
        "Fertirriego de cultivos y monitoreo",
        "Producción de cultivos sin suelo",
        "Mantenimiento del sistema de riego",
        "Interpretación y análisis de suelos",
        "Calidad de agua para riego",
        "Nutrición vegetal y principios de fertirriego",*/
      ],
    },
    // Puedes agregar más cursos aquí si es necesario
  ];

  // Hook de efecto para hacer scroll al diplomado basado en el cursoParam
  useEffect(() => {
    if (cursoParam && cursosRefs.current[cursoParam]) {
      const targetElement = cursosRefs.current[cursoParam];
      if (targetElement) {
        const yOffset = -206; // Este valor crea el espacio de 96px en la parte superior
        const y = targetElement.getBoundingClientRect().top + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [cursoParam]);

  return (
    <div>
      {cursosData.map((curso, index) => (
        <div
          id={curso.id}
          key={index}
          ref={(el) => {
            if (el) {
              cursosRefs.current[curso.id] = el;
            }
          }}
        >
          <Curso curso={curso} />
        </div>
      ))}
    </div>
  );
};

export default DiploAgronoma;
