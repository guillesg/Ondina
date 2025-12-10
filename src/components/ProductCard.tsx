"use client";

import Image from "next/image";

export default function ProductCard({
  producto,
  categoria,
  onVer,
}: {
  producto: {
    id: number;
    src: string;
    nombre: string;
    precio: string;
    descripcion?: string;
  };
  categoria: string;
  onVer: (prod: any) => void;
}) {
  const categoriasReducidas = ["gafas", "gorras", "carteras"];
  const escala = categoriasReducidas.includes(categoria)
    ? "scale-120"
    : "scale-210";

  return (
    <article
      className="
        group bg-white rounded-2xl overflow-hidden 
        shadow-md hover:shadow-[0_10px_25px_rgba(63,169,245,0.35)]
        transition-all duration-300
        border border-transparent hover:border-[#3FA9F5]/40
      "
    >
      {/* IMAGEN */}
      <div className="relative w-full h-56 sm:h-48 md:h-44 lg:h-48 bg-white overflow-hidden">
        <Image
          src={producto.src}
          alt={producto.nombre}
          fill
          className={`
            object-scale-down
            p-5
            ${escala}               /* ← escala automática según categoría */
            group-hover:scale-125 
            transition-transform duration-300
          `}
        />
      </div>

      {/* TEXTO */}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate text-[#3FA9F5]">
          {producto.nombre}
        </h3>

        {producto.descripcion && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {producto.descripcion}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-[#DAEB2B] text-lg">
            €{producto.precio}
          </span>

          <button
            onClick={() => onVer(producto)}
            className="
              text-sm px-4 py-1.5 rounded-md font-semibold
              text-white
              bg-[#3FA9F5]
              border border-[#3FA9F5]
              hover:bg-[#DAEB2B] hover:text-black hover:border-[#DAEB2B]
              transition-all duration-300
            "
          >
            Ver
          </button>
        </div>
      </div>
    </article>
  );
}
