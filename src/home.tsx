import React from 'react';
import backgroundImage from './assets/motos.jpg'; 
import './App.css'; // Asegúrate de importar tu CSS

function Home() {
  return (
    <>
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content">
          <h1>Expertos en el Cuidado de tu Moto</h1>
          <p>Reparación, Mantenimiento y Accesorios en tu ciudad.</p>
          <a href="/servicios" className="cta-button">Ver Servicios</a>
        </div>
      </div>
      
      {/* Las otras secciones de la página de inicio (Acerca de, Galería, etc.) */}
      <section>
        <div className="about-content">
          <p>Somos un taller fundado por motociclistas, para motociclistas. Desde 2010...</p>
        </div>
      </section>
    </>
  );
}

export default Home;