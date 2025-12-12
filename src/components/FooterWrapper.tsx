"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const path = usePathname();

  // ❌ No mostrar footer en /productos
  if (path === "/productos") return null;

  // ✔️ Mostrar footer en todas las demás páginas
  return <Footer />;
}
