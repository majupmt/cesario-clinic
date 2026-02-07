import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cesário Clinic | Manicure Russa e Podal Russo",
  description: "Expert em Manicure Russa e Podal Russo. Alto padrão em tratamentos de unhas e terapia podal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}