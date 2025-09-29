import React, { useState } from "react";
import { FaHome, FaCog, FaWrench, FaTools, FaMotorcycle, FaGasPump, FaBolt, FaShieldAlt } from "react-icons/fa";
import "../App.css";
import servicios from "../assets/servicios.jpg";

function Services() {
  const [loading, setLoading] = useState(false);

  const services = [
    { icon: <FaWrench size={200} color="gold" />, title: "Mantenimiento Preventivo", description: "Cambio de aceite, filtros, revisión de frenos y ajustes generales." },
    { icon: <FaTools size={200} color="gold" />, title: "Reparaciones Mecánicas", description: "Diagnóstico y reparación de motores, sistemas eléctricos, suspensiones y más." },
    { icon: <FaMotorcycle size={200} color="gold" />, title: "Personalización", description: "Modificaciones estéticas y de rendimiento." },
    { icon: <FaGasPump size={200} color="gold" />, title: "Repuestos y Accesorios", description: "Venta de piezas originales y genéricas." },
    { icon: <FaBolt size={200} color="gold" />, title: "Eléctrico y Baterías", description: "Cambio y recarga de baterías, instalación de sistemas eléctricos." },
    { icon: <FaShieldAlt size={200} color="gold" />, title: "Inspección y Seguridad", description: "Chequeo completo de luces, frenos, llantas y sistemas de seguridad." },
  ];

  const handleGoHome = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <section
      className="services-section"
      style={{
        minHeight: "96vh",
        padding: "40px",
        position: "relative",
        backgroundImage: `url(${servicios})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Botón de inicio */}
      <button className="home-button" onClick={handleGoHome}>
        <FaHome /> Inicio
      </button>

      {/* Animación de carga */}
      {loading && (
        <div className="loader-overlay">
          <FaCog className="gear-icon" />
        </div>
      )}

      <h2>Nuestros Servicios</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            {/* Icono centrado */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
