import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/style/globals.css";
import "../assets/style/general.css";
import Script from "next/script"; // <-- Importa o Script

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moinho Nordeste - Temperos Artesanais",
  description:
    "Descubra os melhores temperos e condimentos artesanais do Nordeste. Feitos com ingredientes selecionados e sabor autêntico!",
  keywords: [
    "temperos artesanais",
    "condimentos naturais",
    "culinária nordestina",
    "produtos caseiros",
    "Moinho Nordeste",
    "ervas e especiarias"
  ],
  authors: [{ name: "Moinho Nordeste", url: "https://moinhonordesteoficial.com.br" }],
  creator: "Moinho Nordeste",
  themeColor: "#f59e0b",
  colorScheme: "light",
  metadataBase: new URL("https://moinhonordesteoficial.com.br"),
  openGraph: {
    title: "Moinho Nordeste - Temperos Artesanais",
    description:
      "Explore nossa linha de temperos artesanais com a essência do Nordeste. Qualidade e sabor direto para sua cozinha.",
    url: "https://moinhonordesteoficial.com.br",
    siteName: "Moinho Nordeste",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moinho Nordeste - Temperos Artesanais",
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
