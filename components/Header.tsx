import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';

const Header: React.FC = () => {
  const phoneNumber = "18492100565";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              <span className="text-blue-600">De todo</span> Portalatin
            </h1>
            <p className="text-sm text-slate-500 -mt-1">Soluciones y Servicios</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            <WhatsappIcon className="w-6 h-6 mr-3 transform group-hover:rotate-12 transition-transform" />
            <span>849-210-0565</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;