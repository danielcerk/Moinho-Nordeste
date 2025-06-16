import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/style/globals.css";
import "../assets/style/general.css";
import Script from "next/script"; // <-- Importa o Script

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export const viewport = {
  themeColor: "#f59e0b",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Condimentos Nordeste - Temperos Artesanais",
  description: "Descubra os melhores temperos e condimentos artesanais do Nordeste. Feitos com ingredientes selecionados e sabor autêntico!",
  keywords: [
    "temperos artesanais",
    "condimentos naturais",
    "culinária nordestina",
    "produtos caseiros",
    "Condimentos Nordeste",
    "ervas e especiarias"
  ],
  authors: [{ name: "Condimentos Nordeste", url: "https://moinhonordesteoficial.com.br" }],
  creator: "Condimentos Nordeste",
  metadataBase: new URL("https://moinhonordesteoficial.com.br"),
  openGraph: {
    title: "Condimentos Nordeste - Temperos Artesanais",
    description: "Explore nossa linha de temperos artesanais com a essência do Nordeste. Qualidade e sabor direto para sua cozinha.",
    url: "https://moinhonordesteoficial.com.br",
    siteName: "Condimentos Nordeste",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Condimentos Nordeste - Temperos Artesanais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

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
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Scripts do Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3Z3XFNZLY3"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3Z3XFNZLY3');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
