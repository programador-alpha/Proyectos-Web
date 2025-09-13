import React from "react";
import "../App.css"; // estilos globales o específicos

function Services() {
  // Lista de servicios (más fácil de editar y agregar nuevos)
  const services = [
    {
      icon: "fas fa-wrench",
      title: "Mantenimiento Preventivo",
      description:
        "Cambio de aceite, filtros, revisión de frenos y ajustes generales para mantener tu moto en óptimas condiciones.",
    },
    {
      icon: "fas fa-tools",
      title: "Reparaciones Mecánicas",
      description:
        "Diagnóstico y reparación de motores, sistemas eléctricos, suspensiones y más.",
    },
    {
      icon: "fas fa-motorcycle",
      title: "Personalización",
      description:
        "Modificaciones estéticas y de rendimiento: pintura, luces LED, escapes, y accesorios únicos.",
    },
    {
      icon: "fas fa-gas-pump",
      title: "Repuestos y Accesorios",
      description:
        "Venta de piezas originales y genéricas, además de cascos, guantes y equipos de protección.",
    },
    {
      icon: "fas fa-bolt",
      title: "Eléctrico y Baterías",
      description:
        "Cambio y recarga de baterías, instalación de sistemas eléctricos y accesorios.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Inspección y Seguridad",
      description:
        "Chequeo completo de luces, frenos, llantas y sistemas de seguridad antes de viajes largos.",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
