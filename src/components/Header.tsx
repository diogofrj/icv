import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Instituto Carla Veiga</div>
        <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#home" className="block md:inline-block py-2 hover:text-yellow-500">Início</a>
          <a href="#services" className="block md:inline-block py-2 hover:text-yellow-500">Serviços</a>
          <a href="#about" className="block md:inline-block py-2 hover:text-yellow-500">Sobre</a>
          <a href="#contact" className="block md:inline-block py-2 hover:text-yellow-500">Contato</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;