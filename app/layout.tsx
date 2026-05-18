import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Yasser | Frontend Developer",
  description:
    "Frontend Software Engineer with 2+ years of experience building scalable web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <div className="site-shell">
          <CustomCursor />
          <ParticleCanvas />
          {children}
        </div>
      </body>
    </html>
  );
}
