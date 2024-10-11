import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Nome" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Mensagem" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
              </div>
              <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition duration-300">Enviar</button>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="flex items-center mb-4">
              <Phone className="text-yellow-500 mr-4" size={24} />
              <span>(21) 98117-2180</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="text-yellow-500 mr-4" size={24} />
              <span>institutocarlaveiga@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-yellow-500 mr-4" size={24} />
              <span>Avenida Oliveira Belo, 640</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;