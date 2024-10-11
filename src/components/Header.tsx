import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-custom-black text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="src/logo.png" alt="Instituto Carla Veiga Logo" className="h-12 mr-4" />
          <div className="text-2xl font-serif font-bold text-gold">Instituto Carla Veiga</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#services" className="hover:text-gold transition-colors">Serviços</a>
          <a href="#about" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contato</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-custom-black">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#services" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#about" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;