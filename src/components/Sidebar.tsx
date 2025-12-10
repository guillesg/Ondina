"use client";
import { X } from "lucide-react";

export default function Sidebar({
  open,
  onClose,
  onSelectCategory,
  categorias
}) {
  return (
    <div
      className={`
        fixed left-0 
        top-[64px]
        h-[calc(100vh-64px)]
        bg-[#3FA9F5] text-[#DAEB2B]
        transform transition-transform duration-300 
        z-40

        /* MOBILE & TABLET — sidebar fullscreen */
        ${open ? "translate-x-0 w-full" : "-translate-x-full w-full"}

        /* DESKTOP — sidebar fijo y de 64px */
        lg:translate-x-0 lg:w-64
      `}
    >
      {/* Botón cerrar (solo visible en móvil y tablet) */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#FFD642] text-3xl lg:hidden"
      >
        <X />
      </button>

      <nav className="mt-10 flex flex-col gap-6 text-xl font-semibold px-6">
        {categorias?.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className="hover:text-white capitalize"
          >
            {cat}
          </button>
        ))}
      </nav>
    </div>
  );
}
