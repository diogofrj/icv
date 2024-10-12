import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team'; // Importando o novo componente
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team /> {/* Adicionando o componente da equipe */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
