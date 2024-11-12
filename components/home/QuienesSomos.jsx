import React, { useState } from "react";
import { motion } from "framer-motion";

const QuienesSomos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mx-auto max-w-screen-xl">
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        ¿Quiénes somos?
      </button>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-red-600 dark:bg-yellow-500 p-8 rounded-lg max-w-lg w-full mx-4 text-center"
          >
            <h2 className="text-primaryblue dark:text-blue-50 text-4xl font-extrabold mb-4">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg font-normal text-gray-800 dark:text-white">
              En Ecomás, ofrecemos diplomados, cursos y programas de especialización
              para personas y profesionales que buscan ampliar sus conocimientos y
              habilidades. Combinamos excelencia académica con innovación práctica
              para potenciar tu desarrollo profesional y personal.
            </p>
            <button
              onClick={closeModal}
              className="mt-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 py-2 px-4 rounded-lg"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default QuienesSomos;
