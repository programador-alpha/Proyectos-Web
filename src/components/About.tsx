import React from "react";
import "../App.css"; 
import tallerImg from "../assets/taller.png"; 


//Crea la funcion que lleva el html, estilos con talwind.css, pidale a chat, que le integre eso en un solo archivo.
function About() {
  return (
    <section id="nosotros" className="about-section py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
          Sobre Nosotros
        </h2>

        {/* Imagen con hover animado */}
        <div className="flex justify-center mb-10">
          <img
            src={tallerImg}
            alt="Taller de motos"
            className="rounded-2xl shadow-lg w-full md:w-4/5 
            transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Texto con mejor diseño */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            🚀 <span className="font-semibold text-red-600">Somos un taller fundado por motociclistas</span>, para motociclistas. 
            Desde <span className="font-bold">2010</span> hemos trabajado con pasión para mantener las motos de
            nuestra comunidad en las mejores condiciones.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            🔧 Nuestro equipo está conformado por <span className="font-semibold">expertos en mecánica,
            personalización y mantenimiento</span>. Creemos en un servicio honesto, de calidad y siempre con el mejor trato a nuestros clientes.
          </p>

          <p className="text-xl font-semibold text-gray-900 italic transition duration-500 hover:text-red-600">
            ❤️ Tu seguridad en la carretera es nuestra prioridad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
