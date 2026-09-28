import "@/styles/globals.css";

import { type Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "منجز للخدمات الإلكترونية",
  description:
    "خدمات إلكترونية متعددة في مجال التعامل الرقمي والإداري الخاصة بالموارد البشرية والخدمات العامة للأعمال والمشاريع التجارية وتسجيل العلامة التجارية وخدمات الملكية الفكرية",
  icons: [{ rel: "icon", url: "/logo.avif", type: "image/avif" }],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
