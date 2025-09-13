import React from 'react';
import backgroundImage from '../assets/motos.jpg'; 
import '../App.css';

function Home() {
  return (
    <>
      <div 
        className="hero-section bg-cover bg-center h-screen flex items-center justify-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Taller de Motos Flamencos
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Expertos en el Cuidado de tu Moto
          </p>

          {/* Botones */}
          <div className="flex justify-center gap-6">
            <a 
              href="#nosotros" 
              className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold 
              shadow-md transition duration-300 ease-in-out 
              hover:bg-red-700 hover:scale-105 hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#nosotros")?.scrollIntoView({ 
                  behavior: "smooth" 
                })
                }}
            >
              Sobre Nosotros
            </a>
            
            <a 
              href="#servicios" 
              className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold 
              shadow-md transition duration-300 ease-in-out 
              hover:bg-red-700 hover:scale-105 hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#servicios")?.scrollIntoView({ 
                  behavior: "smooth" 
                })
                }}
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
