"use client";

import ProductCard from "./ProductCard";

type Producto = {
  id: number;
  src: string;
  nombre: string;
  precio: string;
  descripcion?: string;
};

type ProductGridProps = {
  productos: Producto[];
  onVer: (producto: Producto) => void;
  categoria?: string;
};

export default function ProductGrid({
  productos,
  onVer,
  categoria,
}: ProductGridProps) {
  if (!productos || productos.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No hay productos en esta categoría.
      </div>
    );
  }

  return (
    <section className="relative p-6">
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
            categoria={categoria ?? ""}
            onVer={onVer}
          />
        ))}
      </div>
    </section>
  );
}
