import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yifeng Shen",
  description: "Yifeng Shen's personal website, showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased relative overflow-x-hidden`}
      >
        {/* GLOBAL BACKGROUND GLOW */}
        <div className="fixed inset-0 -z-10 pointer-events-none">

          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px]" />

          <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px]" />

        </div>
        {children}
      </body>
    </html>
  );
}
