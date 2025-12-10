import "./globals.css"; 
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mi Web",
  description: "Página del cliente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white">
        
        {/* NAVBAR FIJO */}
        <NavBar />

        {/* CONTENIDO — separado del navbar fijo // className="pt-[80px] max-w-7xl mx-auto px-4"> */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <Footer className="z-60" />
      </body>
    </html>
  );
}
