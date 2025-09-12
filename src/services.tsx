import React from 'react';
import './App.css'; // Asegúrate de importar tu CSS

function Services() {
  return (
    <section className="services-section">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        {/* ... tu código de los servicios */}
        <div className="service-item">
          <i className="fas fa-wrench"></i>
          <h3>Mantenimiento Preventivo</h3>
          <p>Cambio de aceite, filtros, revisión de frenos y ajustes generales para mantener tu moto en óptimas condiciones.</p>
        </div>
        {/* ... los otros servicios */}
      </div>
    </section>
  );
}

export default Services;