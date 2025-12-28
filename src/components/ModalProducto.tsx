"use client";

import Image from "next/image";
import { X } from "lucide-react";

type Producto = {
  src: string;
  nombre: string;
};

type ModalProductoProps = {
  producto: Producto | null;
  onClose: () => void;
};

export default function ModalProducto({
  producto,
  onClose,
}: ModalProductoProps) {
  if (!producto) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
      {/* BOTÓN CERRAR */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl"
        aria-label="Cerrar"
      >
        <X />
      </button>

      {/* CONTENEDOR DE LA IMAGEN */}
      <div className="relative w-full max-w-lg aspect-square modal-anim">
        <Image
          src={producto.src}
          alt={producto.nombre}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
