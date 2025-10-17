
import React from 'react';

const Hero: React.FC = () => {
  const phoneNumber = "8492100565";
  const telLink = `tel:${phoneNumber}`;
  const whatsappLink = `https://wa.me/1${phoneNumber}`;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Braulio Portalatin a su servicio</h2>
        <p className="mt-1 text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Soluciones Confiables, Resultados Garantizados.
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-slate-500">
          Cualquier servicio que necesites, puedes comunicarte y te ayudamos. Atención experta y personalizada para tu vehículo, hogar o negocio.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            <i className="fab fa-whatsapp text-2xl mr-3"></i>
            Contactar por WhatsApp
          </a>
          <a
            href={telLink}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 transition-transform transform hover:scale-105"
          >
             <i className="fas fa-phone text-xl mr-3"></i>
            Llamar Directo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
