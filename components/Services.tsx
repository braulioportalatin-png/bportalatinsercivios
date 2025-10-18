import React from 'react';
import ServiceCard from './ServiceCard';
import { CarIcon } from './icons/CarIcon';
import { GeneratorIcon } from './icons/GeneratorIcon';
import { AcIcon } from './icons/AcIcon';
import { AccessoryIcon } from './icons/AccessoryIcon';

const services = [
  {
    title: "Lavado de Automóviles",
    description: "Servicio de lavado detallado para todo tipo de vehículos. Dejamos tu auto impecable por dentro y por fuera.",
    icon: <CarIcon />,
  },
  {
    title: "Plantas Eléctricas",
    description: "Mantenimiento preventivo y correctivo para generadores eléctricos. Aseguramos tu energía cuando más la necesitas.",
    icon: <GeneratorIcon />,
  },
  {
    title: "Aires Acondicionados",
    description: "Instalación, mantenimiento y limpieza profunda de unidades de aire acondicionado para un rendimiento óptimo.",
    icon: <AcIcon />,
  },
  {
    title: "Autoadornos y Accesorios",
    description: "Instalación de laminados, halones, gomas de repuesto y más. Personaliza y asegura tu vehículo con nosotros.",
    icon: <AccessoryIcon />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Nuestros Servicios Especializados</h2>
          <p className="mt-4 text-lg text-slate-500">Profesionalismo y calidad en cada trabajo.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;