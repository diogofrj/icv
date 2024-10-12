import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Instituto Carla Veiga"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-justify">
            <h2 className="text-4xl font-serif font-bold mb-6 text-center">Sobre o Instituto Carla Veiga</h2>
            <p className="text-gray-700 mb-4">
              O Instituto Carla Veiga é um centro de excelência em saúde, estética e bem-estar. Nossa missão é proporcionar cuidados de alta qualidade, combinando técnicas modernas e atendimento personalizado.
            </p>
            <p className="text-gray-700 mb-4">
              Com uma equipe de profissionais altamente qualificados, oferecemos uma ampla gama de serviços que incluem fisioterapia, quiropraxia, pilates, estética, e muito mais. Nosso objetivo é ajudar nossos clientes a alcançarem o equilíbrio perfeito entre corpo e mente.
            </p>
            <p className="text-gray-700">
              No Instituto Carla Veiga, acreditamos que cada pessoa é única, e por isso, desenvolvemos tratamentos personalizados para atender às necessidades específicas de cada cliente. Venha nos conhecer e descubra como podemos ajudar você a viver com mais saúde e bem-estar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;