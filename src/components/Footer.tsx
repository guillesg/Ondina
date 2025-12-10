import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full bg-[#3FA9F5] text-[#DAEB2B] py-10 shadow-inner
        text-sm md:text-base
        z-[9999]      /* 👈 AQUI EL CAMBIO GORDO */
      "
    >
      <div
        className="
          max-w-4xl mx-auto 
          px-10 md:px-16
          grid sm:grid-cols-1 lg:grid-cols-3 
          gap-10 text-center lg:text-left
        "
      >
        {/* Columna 1 */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide">
            Ondina Surf & Skate
          </h3>
          <p className="text-xs md:text-sm mt-3 text-[#FFD642]/80 leading-relaxed max-w-xs">
            Moda urbana · Estilo surfer · Ediciones limitadas.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col items-center lg:items-start">
          <h4
            className="
              font-semibold text-md md:text-lg 
              mb-3 border-b border-[#DAEB2B]/40 pb-1 w-fit
            "
          >
            Navegación
          </h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              <a href="/" className="hover:text-white transition">Inicio</a>
            </li>
            <li>
              <a href="/productos" className="hover:text-white transition">
                Productos
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col items-center lg:items-start">
          <h4
            className="
              font-semibold text-md md:text-lg 
              mb-3 border-b border-[#DAEB2B]/40 pb-1 w-fit
            "
          >
            Contacto
          </h4>
          <ul className="space-y-4 text-xs md:text-sm">
            <li>
              <a
                href="https://wa.me/34682252682"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <FaWhatsapp size={20} className="text-green-300" /> WhatsApp
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/ondina_surf_shop/?hl=es"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <FaInstagram size={20} className="text-pink-300" /> Instagram
              </a>
            </li>

            <li>
              <a
                href="mailto:ondina@example.com"
                className="flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <MdEmail size={20} className="text-red-300" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div
        className="
          text-center text-[10px] md:text-xs 
          text-[#DAEB2B]/60 mt-10 border-t border-[#DAEB2B]/20 pt-4
        "
      >
        © {new Date().getFullYear()} Ondina. Todos los derechos reservados.
      </div>
    </footer>
  );
}
