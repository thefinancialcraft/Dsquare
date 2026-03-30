import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ['300', '400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dsqaure.com"),
  title: "Dsquare | Best Web Development & Software Solutions Agency",
  description: "Dsquare is a top-tier web development agency delivering smart, scalable, and high-performance software solutions. Specializing in AI-driven web apps, custom CRM, and SEO-optimized business websites.",
  keywords: [
    "Web Development Agency",
    "Software Solutions Express",
    "Custom Web Application",
    "React JS Development India",
    "Full Stack Developers",
    "SEO Friendly Website Design",
    "Startup Web Development",
    "Enterprise Software Solutions",
    "Dsquare Official",
    "Modern Web Design Agency"
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon1.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Dsquare | Elite Web Development & Software Solutions Agency",
    description: "Launch your next big idea with Dsquare. We build fast, secure, and scalable digital products tailored to your business needs.",
    url: "https://www.dsqaure.com/",
    siteName: "Dsquare",
    images: [
      {
        url: "/banner.png",     
        width: 1200,
        height: 630,  
        alt: "Dsquare Web Development Agency Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dsquare | Elite Web Development & Software Solutions Agency",
    description: "Smart, scalable web development and software solutions to grow your business.",
    images: ["/banner.png"],  
  },
  verification: {
    google: "X-QcTt29h54rRCyYp0uFEmFE6l3sacqIx8xAL06lYxk",
  },
};        

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jakarta.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className={jakarta.className}>
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
