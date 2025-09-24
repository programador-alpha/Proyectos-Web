import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Navigation } from "lucide-react";

function Card({ className, children, ...props }) {
  return (
    <div
      className={`rounded-xl border bg-white text-gray-800 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ className, children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6 text-center"
      >
        Información de Contacto
      </motion.h1>

      <div className="w-full max-w-4xl space-y-6">
        {/* Información */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="space-y-6">
              {/* Dirección */}
              <div className="flex items-start gap-3">
                <MapPin className="text-green-600 w-6 h-6" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Dirección
                  </h2>
                  <p className="text-gray-600">
                    Calle 123 #45-67, Bogotá, Colombia
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 w-6 h-6" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Teléfono
                  </h2>
                  <a
                    href="tel:+571234567890"
                    className="text-gray-600 hover:underline"
                  >
                    +57 123 456 7890
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <MessageCircle className="text-green-500 w-6 h-6" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    WhatsApp
                  </h2>
                  <a
                    href="https://wa.me/573001234567?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    +57 300 123 4567
                  </a>
                </div>
              </div>

              {/* Botón navegación en Maps */}
              <div className="flex justify-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Calle+123+%2345-67,+Bogot%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-xl transition"
                >
                  <Navigation className="w-5 h-5" />
                  Abrir en Google Maps
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mapa debajo */}
        <Card className="rounded-2xl shadow-md overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.929233696944!2d-74.08175!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM2JzM1LjAiTiA3NMKwMDQnNTQuMyJX!5e0!3m2!1ses!2sco!4v1694123456789!5m2!1ses!2sco"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
