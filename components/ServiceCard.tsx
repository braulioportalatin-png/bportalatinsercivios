import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
      <div className="bg-slate-100 p-8 flex justify-center items-center h-56 transition-colors duration-300 group-hover:bg-blue-50">
        {icon}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;