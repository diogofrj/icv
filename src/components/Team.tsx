import React, { useState } from 'react';

const PLACEHOLDER = 'https://ui-avatars.com/api/?background=c8a951&color=fff&size=128&font-size=0.4&bold=true&name=';

const professionals = {
    Saúde: [
        { name: 'Dra. Carla Veiga', image: '/assets/dra_carlaveiga.jpeg', description: 'Especialista em fisioterapia com 10 anos de experiência.' },
        { name: 'Dr. Alex Calderaro', image: '/assets/dr_alexcalderaro.jpeg', description: 'Quiropraxista focado em tratamentos personalizados.' },
        { name: 'Dra. Rosemary Caetano', image: '/assets/dra_rosycaetano.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dra. Vanessa Costa', image: '/assets/dra_vanessa.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dr. Juan Ribeiro', image: '/assets/dr_juan.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dra. Andreza Rangel', image: '/assets/dra_andrezarangel.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dra. Vanessa Juncken', image: '/assets/dra_vanessajuncken.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dra. Thaynara Ferreira', image: '/assets/dra_thaynara.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dra. Letycia Pereira', image: '/assets/dra_letyciapereira.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dra. Laila Bogea', image: '/assets/dra_laila.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dra. Leticia Oliveira', image: '/assets/dra_leticia.jpeg', description: 'Fisioterapeuta com vasta experiência em reabilitação.' },
        { name: 'Dr. Rafael Pereira', image: '/assets/dr_nutri_rafael.jpeg', description: 'Nutricionista com vasta experiência em nutrição clínica.' },
        { name: 'Dra. Aline Buendia', image: '/assets/dra_alinebuendia.jpeg', description: 'Endocrinologista.' },
        { name: 'Dr. Renato Caravellos', image: '/assets/dr_renatocaravellos.jpeg', description: 'Ortopedista.' },
    ],
    Estética: [
        { name: 'Dra. Ravine Magalhães', image: '/assets/est_dra_ravinemagalhaes.jpeg', description: 'Biomédica com vasta experiência em estética.' },
        { name: 'Terezinha Lumière', image: '/assets/est_terezinha.jpeg', description: 'Cabeleireira profissional com 40 anos de experiência.' },
        { name: 'Gisele Brites', image: '/assets/est_giselebrites.jpeg', description: 'Terapeuta Capilar e Coloração Pessoal.' },
        { name: 'Monique Costa', image: '/assets/est_moniquecosta.jpeg', description: 'Maquiadora profissional com 10 anos de experiência.' },
        { name: 'Adriana Freitas', image: '/assets/est_adriana.jpeg', description: 'Esteticista com vasta experiência em estética.' },
        { name: 'Valeria Cortat', image: '/assets/est_valeriacortat.jpeg', description: '' },
        { name: 'Helenluce Pantaleão', image: '/assets/est_helenluce.jpeg', description: '' },
        { name: 'Renatha Tavares', image: '/assets/est_renathatavares.jpeg', description: '' },
        { name: 'Aline Marcela', image: '/assets/est_alinemarcela.jpeg', description: '' },
        { name: 'Victória Neiva', image: '/assets/est_victoria.jpeg', description: '' },
        { name: 'Mel Bittencourt', image: '/assets/est_melbittencourt.jpeg', description: '' },
    ],
    'Bem Estar': [
        { name: 'Lya Simões', image: '/assets/be_lya.jpeg', description: 'Nutricionista especializada em dietas personalizadas.' },
        { name: 'Leo Rafael', image: PLACEHOLDER + 'Leo+Rafael', description: 'Personal trainer focado em saúde e bem-estar.' },
        { name: 'Marcia Gaspar', image: '/assets/be_marciagaspar.jpeg', description: 'Artesã' },
    ],
    Staff: [
        { name: 'Annayra Carvalho', image: '/assets/staff_annayra.jpeg', description: 'Administrativo' },
        { name: 'Brenda Menezes', image: '/assets/staff_brenda.jpeg', description: 'Recepcionista' },
        { name: 'Eliza Santos', image: '/assets/staff_eliza.jpeg', description: 'Recepcionista' },
        { name: 'Delivandra Moreira', image: PLACEHOLDER + 'Delivandra+Moreira', description: 'Recepcionista' },
    ],
};

const Team: React.FC = () => {
    const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    const toggleDescription = (name: string) => {
        setSelectedProfessional(selectedProfessional === name ? null : name);
    };

    const handleImageClick = (e: React.MouseEvent, image: string) => {
        e.stopPropagation();
        setExpandedImage(image);
    };

    const closeImage = () => {
        setExpandedImage(null);
    };

    return (
        <section id="team" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif font-bold text-center mb-12">Conheça Nossa Equipe de Profissionais</h2>

                {Object.entries(professionals).map(([category, members]) => (
                    <div key={category} className="mb-8">
                        <h3 className="text-3xl font-serif font-bold mb-4">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {members.map((member) => (
                                <div
                                    key={member.name}
                                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => toggleDescription(member.name)}
                                >
                                    <div
                                        className="w-32 h-32 rounded-full mx-auto mb-4 bg-cover bg-center bg-gray-200"
                                        style={{ backgroundImage: `url(${member.image})`, backgroundPosition: 'center top' }}
                                        onClick={(e) => handleImageClick(e, member.image)}
                                    />
                                    <h4 className="text-xl font-serif font-bold text-center">{member.name}</h4>
                                    {selectedProfessional === member.name && member.description && (
                                        <p className="mt-2 text-gray-700 text-center">{member.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {expandedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeImage}>
                    <img src={expandedImage} alt="Imagem Expandida" className="max-w-full max-h-full rounded-lg" />
                </div>
            )}
        </section>
    );
};

export default Team;
