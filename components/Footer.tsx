
import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';

const Footer: React.FC = () => {
    const phoneNumber = "18492100565";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    const telLink = `tel:${phoneNumber.substring(1)}`;

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white">¿Listo para empezar?</h3>
        <p className="mt-4 text-lg text-slate-400">
          Contacta a Braulio Portalatin hoy mismo para una cotización o para agendar tu servicio.
        </p>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-lg font-medium text-green-400 hover:text-green-300 transition-colors">
            <WhatsappIcon className="w-6 h-6 mr-2" />
            WhatsApp: 849-210-0565
          </a>
          <span className="text-slate-500">|</span>
           <a href={telLink} className="inline-flex items-center text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors">
            <i className="fas fa-phone mr-2"></i>
            Llamada: 849-210-0565
          </a>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-slate-400">&copy; {new Date().getFullYear()} De todo Portalatin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
