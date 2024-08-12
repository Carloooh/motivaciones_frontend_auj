import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Motivaciones",
  description: "Frontend de motivaciones para postulación grupos de trabajo Backend de Adopta Un Junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn( "bg-gradient-to-b from-black via-zinc-950 to-black min-h-screen bg-background font-sans antialiased ", fontSans.variable ) }>
        {children}
      </body>
    </html>
  );
}
