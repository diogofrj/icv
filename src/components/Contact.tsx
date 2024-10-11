import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Informações de Contato</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="w-6 h-6 text-gold mr-2" />
                Avenida Oliveira Belo, 640 - Rio de Janeiro, RJ
              </p>
              <p className="flex items-center">
                <Phone className="w-6 h-6 text-gold mr-2" />
                (21) 98117-2180
              </p>
              <p className="flex items-center">
                <Mail className="w-6 h-6 text-gold mr-2" />
                institutocarlaveiga@gmail.com
              </p>
              <p className="flex items-center">
                <Instagram className="w-6 h-6 text-gold mr-2" />
                @institutocarlaveiga
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Envie uma Mensagem</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold" required></textarea>
              </div>
              <button type="submit" className="bg-gold text-custom-black font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;