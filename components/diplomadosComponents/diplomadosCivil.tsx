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
const DiploCivil = () => {
  const searchParams = useSearchParams();
  const cursoParam = searchParams.get("curso"); // Obtener el valor de 'curso' del URL

  // Crear un ref para cada curso
  const cursosRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // Array de objetos que contienen los datos de cada curso
  const cursosData: CursoData[] = [
    {
      id: "ingenieria-puentes",
      area: "",
      titulo: "Ingeniería de Puentes",
      imagen: "/diplo/1.webp",
      fechaInicio: "11/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Bachilleres, Gerentes y administradores de proyectos y jefes de área. Ingenieros civiles, ingenieros estructurales, arquitectos residentes y supervisores de obras. Profesionales del sector público y privado relacionados con proyectos viales.",
      modulos: [
        "Diseño de puentes, pontones",
        "Estudios de Hidrología e hidráulica en puentes",
        "Estudios geológicos y geotécnicos en puentes",
        "Diseño y modelamiento de puentes con SAP 2000",
        "Diseño y modelamiento de puentes con CSI Bridge",
        "Modelamiento y análisis estructural de puentes",
        "Diseño sísmico en puentes AASHTO-LRFD",
        "Mantenimiento y conservación de puentes",
        "Inspección, evaluación de puentes bajo la metodología SCAP",
      ],
    },
    /*  {
      area: 'INGENIERÍA CIVIL',
      titulo: 'Modelamiento BIM',
      imagen: '/image/bim_model.jpg',
      fechaInicio: '22/06/2024',
      modalidad: 'Virtual',
      duracion: '4 meses',
      horas: '420 horas academicas (26 creditos)',
      descripcion: 'Este diplomado está dirigido a Ingenieros y arquitectos que se encuentran trabajando en diseño y construcción de estructuras de edificaciones, gerentes de proyectos, ingenieros revisores de proyectos estructurales y profesores de universidades que deseen desarrollar o renovar las técnicas y herramientas involucradas en el diseño estructural.',
      modulos: [
        'Modelado de arquitectura',
        'Modelamiento de instalaciones sanitarias',
        'Modelamiento de instalaciones eléctricas',
        'Creación de planos y documentación BIM',
        'Lean construcción y BIM',
        'Gestión de proyectos con Metodología BIM',
        'Modelado de estructuras BIM',
        'Modelamiento de estructuras metálicas BIM',

      ]
    },*/
    {
      id: "asistente-tecnico-obras",
      area: "",
      titulo: "Asistente Técnico en Obras",
      imagen: "/diplo/2.webp",
      fechaInicio: "22/09/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Bachilleres, titulados y profesionales de las carreras de ingeniería civil, industriales, sanitarios, arquitectos y ramas afines.",
      modulos: [
        "Cuaderno de obra físico y digital",
        "Costos y Presupuestos con S10",
        "Valorización de obras",
        "Liquidación de obras",
        "Formulación y planificación de proyectos con MS Project",
        "Análisis y diseño de instituciones educativas",
        "Seguridad, salud ocupacional y medio ambiente en obras públicas",
        "Expediente técnico en obras",
        "Régimen laboral en construcción civil",
        "Planificación y programación de obras",
        "Control de obras",
        "Metrados en edificaciones",
      ],
    },
    {
      id: "ingenieria-vial",
      area: "",
      titulo: "Ingeniería Vial",
      imagen: "/diplo/3.webp",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Bachilleres, Gerentes y administradores de proyectos de la construcción y jefes de área. Ingenieros civiles, topógrafos, arquitectos residentes y supervisores de obras. Profesionales del sector público y privado relacionados con proyectos viales. ",
      modulos: [
        "Estructuras en carreteras - puentes",
        "Metrados, costos y presupuesto - cronograma en obras viales",
        "Arqueología en proyectos viales",
        "Estudio ambientales en proyectos viales",
        "Diseño, construcción y mantenimiento de túneles",
        "Tráfico y carga en proyectos viales.",
        "Topografía, diseño geométrico, señalización y seguridad vial",
        "Geología - Geotecnia en obras viales",
        "Mecánica de suelos en carretera",
        "Suelos y pavimentos en proyectos viales",
        "Hidrología e hidráulica",
        "Integración de proyectos de infraestructura vial",
      ],
    },
    {
      id: "residencia-supervision",
      area: "",
      titulo: "Residencia y supervisón de obras",
      imagen: "/diplo/4.webp",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Gerente de proyectos relacionados a construcción, supervisor de obras, consultores en servicios de ingeniería, ingenieros, arquitectos, topógrafos, bachilleres de la especialidad de ingeniería civil, y/o especialistas afines. Profesionales del sector público y privado relacionados con proyectos de obras civiles.  ",
      modulos: [
        "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
        "Recepción - liquidación de obras y medios de solución de controversia",
        "Expediente técnico como herramienta para la ejecución y supervisión de obra",
        "Valorización y liquidación de obras administración directa",
        "Plan de gestión de seguridad y salud en obra",
        "Contratación y ejecución de obras",
        "Preliminares para inicio de obra",
        "Metrados y valorizaciones de obra",
        "Planeamiento y programación de obras",
        "Informes de obra",
        "Control técnico y calidad en obras",
      ],
    },
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

export default DiploCivil;
