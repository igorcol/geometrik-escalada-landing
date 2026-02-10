import React from "react"
import type { Metadata, Viewport } from "next";
import { Archivo_Black, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "Geometrik Escalada",
  description:
    "A comunidade de escalada mais vibrante da cidade. Do iniciante ao pro, seu lugar é na parede. Boulder, escalada esportiva e muito mais.",
  keywords: [
    "escalada",
    "boulder",
    "climbing",
    "academia",
    "geometrik",
    "comunidade",
  ],
  openGraph: {
    title: "Geometrik Escalada",
    description:
      "A comunidade de escalada mais vibrante da cidade. Do iniciante ao pro, seu lugar é na parede.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${manrope.variable} ${archivoBlack.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
