import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Carla Veiga" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">Sobre o Instituto Carla Veiga</h2>
            <p className="text-lg mb-6">
              O Instituto Carla Veiga é um centro de excelência em saúde, estética e bem-estar. Nossa equipe de profissionais altamente qualificados está comprometida em proporcionar tratamentos personalizados e resultados excepcionais para nossos clientes.
            </p>
            <p className="text-lg">
              Com uma abordagem holística, combinamos técnicas modernas e tradicionais para oferecer uma experiência única de cuidado e rejuvenescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;