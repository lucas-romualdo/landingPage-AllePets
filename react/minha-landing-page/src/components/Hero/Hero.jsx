import React from 'react';
import './Hero.css'; // Vamos criar este arquivo de estilo
import heroImage from '../../assets/logo.svg'; // Exemplo de imagem

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>A Landing Page Perfeita para o seu Negócio</h1>
        <p>Atraia mais clientes com um design moderno, rápido e responsivo.</p>
        <button className="hero-button">Comece Agora</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Ilustração do produto" />
      </div>
    </section>
  );
};

export default Hero;