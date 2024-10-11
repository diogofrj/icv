import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 flex items-center">
            <img src="/logo.png" alt="Instituto Carla Veiga Logo" className="h-12 mr-4" />
            <div>
              <h3 className="text-xl font-serif font-bold text-gold">Instituto Carla Veiga</h3>
              <p className="mt-2">Saúde, Estética e Bem Estar</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="https://www.instagram.com/institutocarlaveiga" className="flex items-center hover:text-gold transition-colors">
              <Instagram size={20} className="mr-2" />
              @institutocarlaveiga
            </a>
            <a href="mailto:institutocarlaveiga@gmail.com" className="flex items-center hover:text-gold transition-colors">
              <Mail size={20} className="mr-2" />
              institutocarlaveiga@gmail.com
            </a>
            <a href="tel:+5521981172180" className="flex items-center hover:text-gold transition-colors">
              <Phone size={20} className="mr-2" />
              (21) 98117-2180
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>Avenida Oliveira Belo, 640 - Rio de Janeiro, RJ</p>
          <p className="mt-2">&copy; 2024 Instituto Carla Veiga. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;