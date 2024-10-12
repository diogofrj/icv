import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      from_name: formData.name,
      to_name: 'ICV',
      message: formData.message,
      email: formData.email,
    };

    // console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    // console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    // console.log('User ID:', import.meta.env.VITE_EMAILJS_USER_ID);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailData,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('Email enviado com sucesso!', response.status, response.text);
      setFormData({ name: '', email: '', message: '' });
      setFeedbackMessage(`Obrigado, ${formData.name}! Sua mensagem foi enviada com sucesso.`);
    })
    .catch((error) => {
      console.error('Erro ao enviar o email:', error);
      setFeedbackMessage('Desculpe, houve um erro ao enviar sua mensagem. Tente novamente mais tarde.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Entre em Contato</h2>
        {feedbackMessage && (
          <div className="mb-4 text-center text-lg font-semibold text-green-600">
            {feedbackMessage}
          </div>
        )}
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                ></textarea>
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
