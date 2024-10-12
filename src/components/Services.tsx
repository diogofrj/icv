import React, { useState } from 'react';
import { Activity, Scissors, Dumbbell, Sparkles, Footprints, Paintbrush, PenTool, Leaf, Heart, HeartPulse, Eye, Star, User, CupSoda, PersonStanding } from 'lucide-react';

const services = [
  {
    name: 'Fisioterapia',
    icon: Activity,
    description: (
      <>
        Movendo a vida para frente. A fisioterapia é a arte de restaurar o movimento e a função. Através de técnicas precisas e personalizadas, nossos fisioterapeutas auxiliam na recuperação de lesões, na gestão da dor e na promoção do bem-estar físico. Com um olhar integrativo para a saúde, buscamos não apenas tratar a condição, mas empoderar você a alcançar seu pleno potencial de movimento e qualidade de vida. Desvende o poder da fisioterapia e descubra um novo nível de bem-estar.
        <ul className="mt-4 list-disc list-inside">
          <li>Fisioterapia Traumato Ortopédica</li>
          <li>Fisioterapia Especializada em Coluna</li>
          <li>Reeducação Postural Global (RPG)</li>
          <li>Fisioterapia Especializada em Escoliose</li>
          <span className="block">(Método S4D – Escoliose Brasil)</span>
          <li>Acupuntura</li>
          <li>Liberação Miofascial</li>
          <li>Recovery</li>
          <li>Terapia por Ondas de Choque</li>
          <li>Ozonioterapia</li>
          <li>Fisioterapia Geriátrica</li>
          <li>Parkinson</li>
          <li>Fisioterapia Pós Operatória de Ortognática</li>
          <li>Reabilitação Vestibular</li>
          <li>Fisioterapia Orofacial (DTM, Bruxismo)</li>
          <li>Fisioterapia Pós Op Facial</li>
          <li>Fisioterapia especializada em injetáveis</li>
          <span className="block">(Infiltrações)</span>
        </ul>
      </>
    )
  },
  {
    name: 'Quiropraxia',
    icon: Activity,
    description: 'A quiropraxia é a arte de harmonizar o corpo. Com toques precisos, nossos quiropraxistas realinham as articulações, liberando tensões e restaurando o movimento natural. Experimente o bem-estar de uma coluna vertebral saudável e sinta seu corpo responder com mais energia e vitalidade. Viva em equilíbrio, mova-se com leveza.'
  },
  {
    name: 'Pilates',
    icon: Dumbbell,
    description: 'Eleve corpo e mente a um novo patamar. Uma sinfonia de movimentos precisos e fluidos, o Pilates é muito mais do que uma simples atividade física. É uma jornada de autoconhecimento, onde corpo e mente se unem em perfeita harmonia. Através de exercícios que desafiam e fortalecem, você redescobre a consciência corporal, melhora a postura e encontra um equilíbrio duradouro. Experimente a sensação de leveza e bem-estar que o Pilates proporciona.'
  },
  { name: 'Salão de Beleza', 
    icon: Scissors, 
    description: 'Seu refúgio de autocuidado. Um espaço onde a beleza encontra a arte. Nosso salão é muito mais do que apenas um local para um corte de cabelo. Aqui, você experimenta uma jornada de transformação, com profissionais especializados que celebram sua individualidade. Relaxe, inspire-se e saia renovada. Um oásis urbano onde a beleza é mais do que aparência, é uma expressão de você.' 
  },
  { name: 'Terapia Capilar', 
    icon: Leaf, 
    description: 'A terapia capilar é um ritual de cuidado que transcende a beleza, restaurando a saúde do seu couro cabeludo e a vitalidade dos fios. Uma jornada personalizada para revelar a beleza natural e única dos seus cabelos.' 
  },
  { name: 'Biomedicina Estética', 
    icon: Heart, 
    description: 'Harmonize sua beleza com a expertise da biomedicina estética. Nossos tratamentos personalizados, realizados por profissionais altamente qualificados, revelam a sua melhor versão. Experimente resultados naturais e duradouros, com tecnologias de ponta e um toque de sofisticação.' 
  },
  { name: 'Análise de Coloração Pessoal', 
    icon: Eye, 
    description: 'Descubra a sua paleta de cores ideal. A análise de coloração pessoal é a arte de harmonizar as cores com a sua beleza natural. Através de um estudo detalhado do seu tom de pele, olhos e cabelo, identificamos quais tonalidades realçam sua luminosidade e te deixam radiante. É como encontrar a sua paleta de cores personalizada, um guia para escolhas que valorizam sua identidade e te fazem brilhar em qualquer ocasião. Uma experiência única para quem busca autoconhecimento e um estilo autêntico.' 
  },
  { name: 'Maquiagem', 
    icon: Star, 
    description: 'A maquiagem é a arte de transformar, realçar e celebrar a individualidade. É um toque de cor que molda rostos, um pincel que traça histórias e uma paleta que reflete a alma. Muito mais que cosméticos, a maquiagem é uma linguagem universal que transcende modas e culturas, permitindo que cada um expresse sua beleza única de maneira autêntica e inspiradora.' 
  },
  { name: 'Lash Designer', 
    icon: Scissors, 
    description: 'Mais do que cílios, uma lash designer oferece uma transformação. Com técnicas e produtos de alta qualidade, realça a beleza individual, empoderando cada cliente a se sentir confiante e radiante. Um olhar poderoso começa aqui.' 
  },
  { name: 'Estética Facial e Corporal', 
    icon: PersonStanding, 
    description: 'A estética facial e corporal é uma celebração da beleza natural. Através de técnicas avançadas e produtos de alta qualidade, realçamos a saúde e a vitalidade do seu rosto e corpo. Cada sessão é uma jornada de cuidado, onde a estética se une à saúde para criar uma experiência rejuvenescedora e revitalizante.' 
  },
  { name: 'Massoterapia', 
    icon: Heart, 
    description: 'Mergulhe em uma jornada sensorial única. A massoterapia é uma arte ancestral que, através de toques precisos e fluidos, promove o equilíbrio entre corpo e mente. Com movimentos personalizados, essa terapia milenar alivia tensões, revitaliza os tecidos e desperta uma profunda sensação de bem-estar. Experimente a sinergia perfeita entre tradição e inovação e descubra uma nova forma de cuidar de si.' 
  },    
  {
    name: 'Esmalteria',
    icon: Paintbrush,
    description: 'Um refúgio para suas unhas. Desperte a beleza natural das suas mãos e pés em um ambiente sofisticado e acolhedor. Nossas manicures experientes transformam cada unha em uma obra de arte personalizada, com esmaltes de alta qualidade e técnicas inovadoras.'
  },
  {
    name: 'Podologia',
    icon: Footprints,
    description: 'A arte de cuidar dos pés, a base do seu corpo. Nossa especialidade é transformar cada passo em um momento de bem-estar, através de tratamentos personalizados e preventivos. Descubra a saúde dos seus pés e eleve sua qualidade de vida.'
  },

  { name: 'Tatuagem', 
    icon: PenTool, 
    description: 'Arte na Pele, Alma Exposta. Uma tatuagem é muito mais do que um desenho na pele. É uma expressão artística que transcende a epiderme, revelando a individualidade e a história de quem a carrega. Uma jornada criativa onde a tinta se torna tinta, a agulha, pincel, e a pele, a tela perfeita para a alma se manifestar. Uma marca indelevel, um amuleto pessoal, uma obra de arte que pulsa a cada batida do coração.' 
  },
  { name: 'Micropigmentação de Sobrancelhas:', 
    icon: PenTool, 
    description: 'Eleve seu olhar com a arte da beleza. Desvende a magia da micropigmentação. Uma técnica que redefine a beleza natural das sobrancelhas, fio a fio. Imagine um olhar mais marcante e definido, sem a necessidade de retoques diários. Nossa equipe especializada molda sobrancelhas sob medida, realçando seus traços únicos e proporcionando um resultado impecável e duradouro.  Experimente a transformação e sinta-se mais confiante a cada olhar.' 
  },
  { name: 'Micropigmentação Labial', 
    icon: PenTool, 
    description: 'Eleve sua Beleza Natural. Sonha com lábios vibrantes e definidos sem a necessidade de retoques constantes? A micropigmentação labial é a solução perfeita! Através de pigmentos especiais e técnicas precisas, realçamos a beleza natural dos seus lábios, proporcionando um contorno impecável e uma cor personalizada. Sinta-se confiante e radiante em todas as ocasiões com um resultado natural e duradouro. A micropigmentação labial é a nova tendência que vai te encantar!' 
  },
  { name: 'Depilação', 
    icon: Leaf, 
    description: 'Liberte sua pele, revele sua beleza. ✨ A depilação é uma jornada de autocuidado que vai além da estética. É a arte de esculpir a sua pele, removendo suavemente os pelos indesejados e revelando uma textura suave e uniforme. Escolha o método que mais te agrada e sinta-se livre para explorar novas sensações. Sua pele agradece!' 
  },
  { name: 'Nutricionista', 
    icon: User, 
    description: 'Um nutricionista é o arquiteto da sua alimentação, transformando refeições em experiências nutritivas e prazerosas. Com conhecimento científico e empatia, ele te ajuda a alcançar seus objetivos de saúde e bem-estar, criando um plano alimentar personalizado que se adapta ao seu estilo de vida. Mais do que contar calorias, um nutricionista te empodera a fazer escolhas conscientes e saborosas, promovendo uma relação equilibrada e duradoura com a comida.' 
  },
  { name: 'Espaço Vida Saudável Herbalife', 
    icon: CupSoda, 
    description: 'Seu refúgio para um novo estilo de vida. Em um mundo acelerado, o Espaço Vida Saudável Herbalife oferece mais que produtos. É um encontro com pessoas inspiradoras, um convite à experimentação de sabores saudáveis e uma jornada personalizada rumo ao bem-estar. Um ambiente acolhedor onde você redescobre o prazer de cuidar de si, com o apoio de especialistas e uma comunidade que te inspira a cada passo.' 
  },
  { name: 'Loja de bijuterias', 
    icon: Sparkles, 
    description: 'Nosso atelier é um santuário de criatividade, onde cada peça de bijuteria fina é esculpida com paixão e minúcia. Em nossa loja, você encontra muito mais que acessórios: descobre joias únicas que celebram sua individualidade e elevam seu estilo a outro patamar.' 
  },
  { name: 'Belo Training', 
    icon: HeartPulse, 
    description: 'Desvende o seu potencial em um ambiente único e personalizado. Nosso centro, localizado em um jardim exuberante, oferece um programa de treinamento exclusivo, adaptado às suas necessidades e objetivos.' 
  },

];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const toggleDescription = (serviceName: string) => {
    setSelectedService(selectedService === serviceName ? null : serviceName);
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" 
              onClick={() => toggleDescription(service.name)}
            >
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2">{service.name}</h3>
              {/* <p className="text-gray-600">Oferecemos serviços de {service.name.toLowerCase()} de alta qualidade para cuidar da sua saúde e bem-estar.</p> */}
              {selectedService === service.name && (
                <p className="mt-4 text-gray-700 text-justify">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;