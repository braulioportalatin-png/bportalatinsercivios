import React from 'react';
import { SourcingIcon } from './icons/SourcingIcon';

const SourcingService: React.FC = () => {
  const phoneNumber = "18492100565";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <section id="sourcing" className="bg-blue-600 group">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <SourcingIcon />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Venta de Artículos a Pedido
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Celulares, vehículos, ropa... Lo que sea que andes buscando, solicítamelo y te lo facilito. Tu asistente de compras personal.
            </p>
            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-blue-600 bg-white hover:bg-blue-50 transition-transform transform hover:scale-105"
              >
                Solicitar un Artículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourcingService;