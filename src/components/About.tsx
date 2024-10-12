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
              O Instituto Carla Veiga é um centro de excelência em saúde, estética e bem-estar. <strong>Nossa Missão</strong> é proporcionar cuidados de alta qualidade por meio de uma equipe multidisciplinar integrada, com foco em 
              tratamentos eficazes, atendimento humanizado e inovação, visando o bem-estar físico e emocional de 
              cada cliente superando suas expectativas.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Nossos Valores:</strong>
              <ul className="mt-4 list-inside pl-5">
                <li className="text-gray-700"><strong>Excelência no Atendimento:</strong> Compromisso com a qualidade e atenção aos detalhes para garantir que cada cliente receba o melhor cuidado possível.</li>
                <li className="text-gray-700"><strong>Humanização:</strong> Atendimento empático, personalizado e focado nas necessidades individuais de cada cliente.</li>
                <li className="text-gray-700"><strong>Inovação:</strong> Utilização de tecnologias avançadas e práticas atualizadas para proporcionar tratamentos eficazes e modernos.</li>
                <li className="text-gray-700"><strong>Ética e Transparência:</strong> Agir com integridade, honestidade e clareza em todas as interações.</li>
                <li className="text-gray-700"><strong>Trabalho em Equipe:</strong> Colaboração entre diferentes especialidades para oferecer um cuidado integrado e abrangente.</li>
                <li className="text-gray-700"><strong>Compromisso com a Satisfação do Paciente:</strong> Foco em proporcionar uma experiência que vá além das expectativas, visando a satisfação completa dos clientes.</li>
              </ul>
            </p>            
            <p className="text-gray-700 mb-4">
              <strong>Nossa Visão</strong> é ser referência em cuidados de saúde multidisciplinares, reconhecida pela excelência no atendimento, pela inovação contínua e pela plena satisfação de nossos clientes, consolidando nossa marca como sinônimo de qualidade e confiança no setor de saúde e bem-estar.
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
