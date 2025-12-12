import "./globals.css";
import NavBar from "@/components/NavBar";
import FooterWrapper from "@/components/FooterWrapper";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Ondina",
  description: "Página del cliente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${raleway.variable} ${poppins.variable}`}>
      <body className="bg-white">
        <NavBar />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
