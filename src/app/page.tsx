import BackgroundSection from "@/components/BackgroundSection";
import data from "./data/images.json";
import Image from "next/image";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function HomePage() {
  return (
    <main>
      {/* SECTION 1 */}
      {/* SECTION 1 */}
      <BackgroundSection src={data.backgrounds[0].src}>
        {/* OVERLAY PRO */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#DAEB2B] fade-up drop-shadow-lg">
            Ondina Surf & Skate Store
          </h1>

          <p className="max-w-xl mx-auto text-white text-lg md:text-xl fade-up delay-150 leading-relaxed">
            Moda urbana, surf y skate. Estilo único, rotación constante y
            productos exclusivos para quienes buscan algo diferente.
          </p>

          <a
            href="/productos"
            className="
            mt-8 inline-block px-8 py-3 
            text-lg font-bold rounded-xl
            bg-[#3FA9F5] text-white shadow-xl
            hover:bg-[#DAEB2B] hover:text-black
            transition-all duration-300 fade-up delay-200
            hover:scale-105
          "
          >
            Ver nuestros productos
          </a>
        </div>
      </BackgroundSection>

      {/* SECTION 2 – NUESTRAS TIENDAS */}
      <BackgroundSection src={data.backgrounds[2].src}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] rounded"></div>

        <div className="relative z-10 px-6 py-20 md:py-28">
          {/* LOGO */}
          <div className="flex justify-center mb-6 fade-up">
            <Image
              src="/logo2.bmp"
              width={160}
              height={160}
              alt="Ondina Logo"
              className="select-none pointer-events-none drop-shadow-lg"
            />
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center text-[#DAEB2B] fade-up delay-100">
            Nuestras tiendas
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white text-lg max-w-3xl mx-auto fade-up delay-200">
            <div className="flex flex-col gap-3 bg-black/40 p-4 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#DAEB2B]">Gáldar</h3>
              <p className="flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-[#DAEB2B]" />
                Calle Soront Semidán 3
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-[#DAEB2B]" />
                928 895 332
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-black/40 p-4 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#DAEB2B]">Agaete</h3>
              <p className="flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-[#DAEB2B]" />
                Centro Comercial Las Nieves
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-[#DAEB2B]" />
                928 898 196
              </p>
            </div>
          </div>

          <p className="text-center mt-8 text-[#DAEB2B] text-lg font-medium fade-up delay-300">
            ondina@ondinasurf.com
          </p>
        </div>
      </BackgroundSection>
    </main>
  );
}
