"use client";

import { useEffect, useState } from "react";
import FloatingButton from "@/components/Floatingbutton";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import data from "../data/images.json";
import Image from "next/image";

export default function ProductosPage() {
  const [open, setOpen] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState("zapatillas");
  const [modalProducto, setModalProducto] = useState<any>(null);

  // Control flotante
  const [hideFloating, setHideFloating] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("sentinel-final");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setHideFloating(entries[0].isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  const handleSelect = (cat: string) => {
    setCategoriaActiva(cat);
    setOpen(false);
  };

  const productos = (data as any)[categoriaActiva] ?? [];

  return (
    <main className="min-h-screen relative overflow-x-hidden lg:pl-64 bg-gradient-to-b from-white to-[#F3FBFF] dark:from-neutral-900 dark:to-neutral-800">

      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        onSelectCategory={handleSelect}
        categorias={data.categorias}
      />

      <FloatingButton onClick={() => setOpen(true)} visible={!hideFloating} />

      {/* ENCABEZADO */}
      <div className="p-6 pt-20">
        <h1 className="text-4xl font-extrabold capitalize bg-gradient-to-r from-[#3FA9F5] to-[#DAEB2B] bg-clip-text text-transparent drop-shadow-sm">
          {categoriaActiva}
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
          Explora nuestra selección especialmente para ti.
        </p>

        {/* Línea decorativa */}
        <div className="w-24 h-1 mt-3 rounded-full bg-gradient-to-r from-[#3FA9F5] to-[#DAEB2B]"></div>
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="px-4 pb-10">
        <ProductGrid productos={productos} onVer={setModalProducto} categoria={categoriaActiva} />
      </div>

      {/* SENTINEL PARA FLOATING */}
      <div id="sentinel-final" className="h-1"></div>

      {/* MODAL */}
      {modalProducto && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative bg-white rounded-2xl max-w-md w-full p-4 shadow-2xl">

            {/* Botón cerrar */}
            <button
              className="absolute top-2 right-2 text-3xl text-black hover:text-[#3FA9F5] transition"
              onClick={() => setModalProducto(null)}
            >
              ✕
            </button>

            {/* Imagen */}
            <div className="relative w-full h-80">
              <Image
                src={modalProducto.src}
                alt={modalProducto.nombre}
                fill
                className="object-contain"
              />
            </div>

            {/* Info */}
            <h2 className="text-2xl font-bold mt-4">{modalProducto.nombre}</h2>

            <p className="text-gray-700 text-lg mt-1">
              <span className="font-semibold bg-gradient-to-r from-[#3FA9F5] to-[#F55FA7] bg-clip-text text-transparent">
                €{modalProducto.precio}
              </span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
