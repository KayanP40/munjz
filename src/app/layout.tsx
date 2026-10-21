import "@/styles/globals.css";

import { type Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "منجز",
    "خدمات أعمال",
    "تأسيس شركات",
    "تسجيل علامة تجارية",
    "الهوية التجارية",
    "التسويق الرقمي",
    "تصميم شعارات",
    "تصميم مواقع إلكترونية",
    "تطوير مواقع",
    "ملكية فكرية",
    "موارد بشرية",
    "إقامة مميزة",
    "السعودية",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo2.jpeg", type: "image/jpeg", sizes: "any" },
    ],
    apple: [{ url: "/logo2.jpeg", type: "image/jpeg" }],
    shortcut: "/logo2.jpeg",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1600,
        height: 1600,
        alt: siteConfig.name,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
