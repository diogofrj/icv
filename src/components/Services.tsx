import React from 'react';
import { Activity, Dumbbell, Scissors, Leaf, Spa } from 'lucide-react';

const services = [
  { name: 'Quiropraxia', icon: Spa },
  { name: 'Fisioterapia', icon: Activity },
  { name: 'Pilates', icon: Dumbbell },
  { name: 'Estética', icon: Leaf },
  { name: 'Salão de Beleza', icon: Scissors },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
              {React.createElement(service.icon, { className: "mx-auto mb-4 text-yellow-500", size: 48 })}
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;