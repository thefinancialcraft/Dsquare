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
  title: "Dsqaure | Web Development & Software Solutions",
  description: "Smart, scalable web development and software solutions to grow your business.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon1.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Dsqaure | Web Development & Software Solutions",
    description: "Smart, scalable web development and software solutions to grow your business.",
    url: "https://www.dsqaure.com/",
    siteName: "Dsqaure",
    images: [
      {
        url: "https://www.dsqaure.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dsqaure Web Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dsqaure | Web Development & Software Solutions",
    description: "Smart, scalable web development and software solutions to grow your business.",
    images: ["https://www.dsqaure.com/og-image.jpg"],
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
