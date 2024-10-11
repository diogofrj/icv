import React, { useState } from 'react';
import { Activity, Scissors, Dumbbell, Sparkles, Heart } from 'lucide-react';

const services = [
  { name: 'Fisioterapia', icon: Activity, description: 'A fisioterapia é a arte de restaurar o movimento e a função. Através de técnicas precisas e personalizadas, nossos fisioterapeutas auxiliam na recuperação de lesões, na gestão da dor e na promoção do bem-estar físico. Com um olhar integrativo para a saúde, buscamos não apenas tratar a condição, mas empoderar você a alcançar seu pleno potencial de movimento e qualidade de vida. Desvende o poder da fisioterapia e descubra um novo nível de bem-estar.' },
  { name: 'Quiropraxia', icon: Activity, description: 'A quiropraxia é a arte de harmonizar o corpo. Com toques precisos, nossos quiropraxistas realinham as articulações, liberando tensões e restaurando o movimento natural. Experimente o bem-estar de uma coluna vertebral saudável e sinta seu corpo responder com mais energia e vitalidade. Viva em equilíbrio, mova-se com leveza.' },
  { name: 'Pilates', icon: Dumbbell, description: 'Uma sinfonia de movimentos precisos e fluidos, o Pilates é muito mais do que uma simples atividade física. É uma jornada de autoconhecimento, onde corpo e mente se unem em perfeita harmonia. Através de exercícios que desafiam e fortalecem, você redescobre a consciência corporal, melhora a postura e encontra um equilíbrio duradouro. Experimente a sensação de leveza e bem-estar que o Pilates proporciona.' },
  { name: 'Estética', icon: Sparkles, description: 'Serviços estéticos que visam melhorar a aparência e promover o bem-estar.' },
  { name: 'Salão de Beleza', icon: Scissors, description: 'Serviços de beleza, incluindo cortes de cabelo, coloração e tratamentos capilares.' },
  { name: 'Bem-Estar', icon: Heart, description: 'Atividades e tratamentos que promovem a saúde física e mental.' },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const toggleDescription = (serviceName: string) => {
    setSelectedService(selectedService === serviceName ? null : serviceName);
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" 
              onClick={() => toggleDescription(service.name)}
            >
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2">{service.name}</h3>
              {/* <p className="text-gray-600">Oferecemos serviços de {service.name.toLowerCase()} de alta qualidade para cuidar da sua saúde e bem-estar.</p> */}
              {selectedService === service.name && (
                <p className="mt-4 text-gray-700 text-justify">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
