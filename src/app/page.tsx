import BackgroundSection from "@/components/BackgroundSection";
import data from "./data/images.json";
import Image from "next/image";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function HomePage() {
  return (
    <main>

      {/* SECTION 1 */}
      <BackgroundSection src={data.backgrounds[2].src}>
        <h1 className="text-4xl font-bold mb-4 text-[#DAEB2B] fade-up">
          Ondina Surf & Skate Store
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white fade-up delay-150">
          Somos una tienda especializada en moda urbana, surf y skate. 
          Productos exclusivos, rotación constante, estilo playero y deportivo.
          Cada semana nuevas prendas para quienes buscan algo único.
        </p>
      </BackgroundSection>


      {/* SECTION 2 – NUESTRAS TIENDAS */}
      <BackgroundSection src={data.backgrounds[1].src}>

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

          {/* 🟦 GÁLDAR */}
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

          {/* 🟦 AGAETE */}
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

        {/* EMAIL ABAJO */}
        <p className="text-center mt-8 text-[#DAEB2B] text-lg font-medium fade-up delay-300">
          ondina@ondinasurf.com
        </p>

      </BackgroundSection>

    </main>
  );
}
