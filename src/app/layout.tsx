import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/effects/CursorGlow";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kappati Hasini — AI & Full Stack Developer",
  description:
    "Portfolio of Kappati Hasini — B.Tech AI student, full stack developer, and AI engineer building intelligent digital solutions.",
  keywords: ["AI Developer", "Full Stack", "Kappati Hasini", "Portfolio", "Machine Learning"],
  openGraph: {
    title: "Kappati Hasini — AI & Full Stack Developer",
    description: "Building intelligent digital experiences through AI, full stack development, and innovation-driven projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased bg-[#030712] text-slate-100">
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
