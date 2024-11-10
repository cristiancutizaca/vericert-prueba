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

const DiploAlimentarias = () => {
    const searchParams = useSearchParams();
    const cursoParam = searchParams.get("curso"); // Obtener el valor de 'curso' del URL
  
    // Crear un ref para cada curso
    const cursosRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // Array de objetos que contienen los datos de cada curso
  const cursosData: CursoData[] = [
    {
      id: "gestion-calidad-alimentos",
      area: "",
      titulo: "Gestión de la calidad e inocuidad alimentaria",
      imagen: "/diplo/11.webp",
      fechaInicio: "22/09/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Bachilleres, titulados y profesionales de las carreras de ingeniería de industria alimentarias, agroindustriales, agrónomos, biólogos y carreras afines a la calidad e inocuidad, jefes, supervisores y personal técnico involucrado en actividades relacionadas con alguna etapa de la cadena alimentaria: producción primaria, transporte, almacenamiento y elaboración.",
      modulos: [
        "Análisis de peligros y puntos críticos de control (HACCP)",
        "Esquema FSSC 22000",
        "Fundamentos e Interpretación de los Sistemas de Gestión de la Calidad ISO 9001",
        "Inspección y muestreo de alimentos",
        "Trazabilidad y etiquetado",
        "Implementación del Protocolo GLOBALGAP VERSIÓN 5.2. 2020 – 1",
        "Auditoría de sistemas integrados de gestión de la calidad e inocuidad alimentaria",
        "Calidad e Inocuidad alimentaria",
        "Higiene, Saneamiento y control de plagas en la industria alimentaria",
        "Interpretación e implementación de la norma ISO 31000 -Gestión de Riesgos",
        "Programas Pre-requisitos con base en ISO 22002-1 y BRC v.09",
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

export default DiploAlimentarias;
