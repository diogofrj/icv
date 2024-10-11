import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Instituto Carla Veiga</h1>
        <p className="text-xl md:text-2xl mb-8">Quiropraxia, Fisioterapia e Bem-Estar</p>
        <a href="#contact" className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">Agende sua Consulta</a>
      </div>
    </section>
  );
};

export default Hero;