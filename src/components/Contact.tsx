import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Navigation } from "lucide-react";

export default function InfoPage() {
  return (
    <div className="info-container">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="info-title"
      >
        Información de Contacto
      </motion.h1>

      <div className="info-content">
        {/* Tarjeta con la información */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <div className="card-content">
            {/* Dirección */}
            <div className="info-item">
              <MapPin className="icon icon-green" />
              <div>
                <h2 className="info-subtitle">Dirección</h2>
                <p className="info-text">Calle 123 #45-67, Bogotá, Colombia</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="info-item">
              <Phone className="icon icon-blue" />
              <div>
                <h2 className="info-subtitle">Teléfono</h2>
                <a href="tel:+571234567890" className="info-link">
                  +57 123 456 7890
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="info-item">
              <MessageCircle className="icon icon-green-light" />
              <div>
                <h2 className="info-subtitle">WhatsApp</h2>
                <a
                  href="https://wa.me/573001234567?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  +57 300 123 4567
                </a>
              </div>
            </div>

            {/* Botón Google Maps */}
            <div className="info-button-container">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Calle+123+%2345-67,+Bogot%C3%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="info-button"
              >
                <Navigation className="icon-button" />
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mapa */}
        <div className="card">
          <div className="card-content map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.929233696944!2d-74.08175!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM2JzM1LjAiTiA3NMKwMDQnNTQuMyJX!5e0!3m2!1ses!2sco!4v1694123456789!5m2!1ses!2sco"
              allowFullScreen={true}
              loading="lazy"
              className="map-frame"
              title="Ubicación Taller"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
