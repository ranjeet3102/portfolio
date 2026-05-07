import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/ui/CursorGlow";

export const metadata: Metadata = {
  title: "Your Name — AI & DS Developer Portfolio",
  description:
    "Final year AI & DS student and Full-Stack Web Developer specializing in LLM agents, Machine Learning, Deep Learning, and Natural Language Processing.",
  keywords: [
    "AI Developer",
    "Full Stack Developer",
    "Machine Learning",
    "NLP",
    "LLM",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
