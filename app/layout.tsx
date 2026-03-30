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
  title: "D Square | Premium Web Development Agency",
  description: "D Square helps businesses grow with fast, modern, and high-converting websites using cutting-edge technology.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
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
