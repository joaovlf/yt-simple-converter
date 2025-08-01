import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TbPlayerPlay } from "react-icons/tb";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased justify-center items-center flex flex-col w-full bg-blue-700 `}
      >
        <header className="bg-amber-500 w-full p-3.5 font-extrabold flex items-center justify-center">
          <Link href="/principal">
            <button className="flex items-center justify-center gap-1.5 cursor-pointer">
              <p>SYC</p>
              <TbPlayerPlay size={20} />
            </button>
          </Link>
        </header>
        {children}
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
