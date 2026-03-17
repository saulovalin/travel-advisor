import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Travel Advisor Premium",
  description: "Explore os melhores lugares do mundo",
};

export default function RootLayout({
  children,
} : Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans antialiased bg-stone-50 text-sky-950`}>
        {children}
      </body>
    </html>
  );
}