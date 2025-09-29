import React, { useState } from 'react';
import backgroundImage from '../assets/motos.jpg'; 
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleServiciosClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/servicios');
    }, 2000); 
  };

  return (
    <>
      {loading && <Loader />}
      <div 
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content">
          <h1>Taller de Motos Flamencos</h1>
          <p>Expertos en el Cuidado de tu Moto</p>

          <div className="cta-buttons">
            <a 
              href="#nosotros" 
              className="cta-button"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Sobre Nosotros
            </a>
            
            <button 
              className="cta-button"
              onClick={handleServiciosClick}
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
