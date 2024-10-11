import React from 'react';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-custom-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <img
          src="src/logo.png"
          alt="Instituto Carla Veiga Logo"
          className="mx-auto mb-8 w-64 h-auto"
        />
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          <span className="text-gold">Saúde</span>,{' '}
          <span className="text-gold">Estética</span> e{' '}
          <span className="text-gold">Bem-Estar</span>
        </h1>
        <p className="text-xl mb-8 font-light">
          Descubra o melhor cuidado para você no Instituto Carla Veiga
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <a
            href="#services"
            className="bg-gold text-custom-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Nossos Serviços
          </a>
          <a
            href="https://wa.me/5521981172180"
            className="flex items-center bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors"
          >
            <Phone className="mr-2" size={20} />
            Agende seu Atendimento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
