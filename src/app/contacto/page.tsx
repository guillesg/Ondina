"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 pt-32 pb-24">

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-center mb-4 text-[#3FA9F5] tracking-wide">
        Contacta con Nosotros
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Estamos aquí para ayudarte. Escríbenos por WhatsApp, visítanos en Instagram
        o acércate a una de nuestras tiendas físicas.
      </p>

      {/* BOTONES */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">

        {/* WHATSAPP */}
        <a
          href="https://wa.me/34682252682"
          target="_blank"
          className="flex items-center gap-3 bg-[#25D366] text-white px-7 py-4 rounded-2xl text-xl font-semibold shadow-xl hover:scale-105 transition-transform"
        >
          <FaWhatsapp className="text-3xl" />
          WhatsApp
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/ondina_surf_shop/?hl=es"
          target="_blank"
          className="flex items-center gap-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-7 py-4 rounded-2xl text-xl font-semibold shadow-xl hover:scale-105 transition-transform"
        >
          <FaInstagram className="text-3xl" />
          Instagram
        </a>

      </div>

      {/* SECCIÓN TIENDAS */}
      <h2 className="text-3xl font-extrabold text-center mb-3 text-[#3FA9F5] tracking-wide">
        Nuestras Tiendas
      </h2>
      <p className="text-center text-gray-600 mb-14">
        Ven a visitarnos en cualquiera de nuestras ubicaciones
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

        {/* GÁLDAR */}
        <div className="p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-[#3FA9F5] mb-1">Gáldar</h3>
          <p className="text-gray-700 mb-4">Calle Soront Semidán 3</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.39369440361!2d-15.648574!3d28.146006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cbba3df48523%3A0x5d2b9f8fe8239ac1!2sC.%20Soront%20Semid%C3%A1n%2C%203%2C%2035400%20G%C3%A1ldar%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1738359489381!5m2!1ses!2ses"
            width="100%"
            height="300"
            className="rounded-xl shadow-lg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* AGAETE */}
        <div className="p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-[#3FA9F5] mb-1">Agaete</h3>
          <p className="text-gray-700 mb-4">Centro Comercial Las Nieves</p>

          <iframe
            src="https://www.google.com/maps?q=Centro+Comercial+Las+Nieves,+Agaete&z=17&output=embed"
            width="100%"
            height="300"
            className="rounded-xl shadow-lg"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </main>
  );
}
