import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/style/globals.css";
import "../assets/style/general.css";

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Moinho Nordeste - Temperos Artesanais",
  description:
    "Temperos e condimentos artesanais com a autêntica essência nordestina. Feito com alma, entregue com sabor.",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
