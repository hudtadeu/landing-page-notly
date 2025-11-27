import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  authors: [
    {
      name: "Hudson Tadeu",
      url: "https://hudontadeu.com",
    },
  ],
  creator: "hudsontadeu",
  openGraph: {
    type: "website",
    locale: "pt_BR ",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    siteName: siteConfig.name,
    images: [
      {
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.svg", // Certifique-se de exportar o SVG do NotlyIcon para /public/favicon.svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ colorScheme: "root" }} className="root">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
