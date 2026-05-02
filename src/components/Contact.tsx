import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

emailjs.init('hYPtjZpkaqMeNvp1L');

function formatWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validate(formData: typeof initialState) {
  const errors: Partial<typeof initialState> = {};
  if (formData.name.trim().length < 3)
    errors.name = 'Informe seu nome completo (mínimo 3 caracteres).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    errors.email = 'Informe um e-mail válido. Ex: nome@email.com';
  const digits = formData.whatsapp.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11)
    errors.whatsapp = 'Informe um WhatsApp válido com DDD. Ex: (21) 98117-2180';
  if (formData.message.trim().length < 10)
    errors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.';
  return errors;
}

const initialState = { name: '', email: '', whatsapp: '', message: '' };

const Contact: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = {
      ...formData,
      [name]: name === 'whatsapp' ? formatWhatsApp(value) : value,
    };
    setFormData(updated);
    if (errors[name as keyof typeof initialState]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    emailjs.send('service_j1j3owl', 'template_wivsskc', {
      from_name: formData.name,
      to_name: 'ICV',
      message: formData.message,
      email: formData.email,
      whatsapp: formData.whatsapp,
    })
      .then(() => {
        setFormData(initialState);
        setErrors({});
        setFeedbackMessage(`Obrigado, ${formData.name}! Sua mensagem foi enviada com sucesso.`);
      })
      .catch(() => {
        setFeedbackMessage('Desculpe, houve um erro ao enviar sua mensagem. Tente novamente mais tarde.');
      })
      .finally(() => setSending(false));
  };

  const inputClass = (field: keyof typeof initialState) =>
    `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold ${errors[field] ? 'border-red-500' : 'border-gray-300'}`;

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
                sac@institutocarlaveiga.com.br
              </p>
              <p className="flex items-center">
                <Instagram className="w-6 h-6 text-gold mr-2" />
                @institutocarlaveiga
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={inputClass('name')}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nome@email.com"
                  className={inputClass('email')}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="whatsapp" className="block text-gray-700 font-bold mb-2">WhatsApp <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(21) 98117-2180"
                  className={inputClass('whatsapp')}
                />
                {errors.whatsapp && <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem..."
                  className={inputClass('message')}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="bg-gold text-custom-black font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
