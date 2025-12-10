"use client";

import ProductCard from "./ProductCard";

export default function ProductGrid({ productos, onVer, categoria }) {
  if (!productos || productos.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No hay productos en esta categoría.
      </div>
    );
  }

  return (
    <section className="relative p-6">

      {/* GRID — Ocupa toda la pantalla cuando el sidebar desaparece */}
      <div
        className="
          grid 
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
        "
      >
        {productos.map((p) => (
          <ProductCard
            key={p.id}
            producto={p}
            categoria={categoria}
            onVer={onVer}
          />
        ))}
      </div>
    </section>
  );
}
