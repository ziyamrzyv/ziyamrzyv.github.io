// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ziya Mirzayev",
  description: "Portfolio • IT / DevOps",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <div className="mx-auto w-full flex-1 flex gap-6 px-8 py-7">
            <main className="flex-1 w-full">{children}</main>
            {/* Desktop aside */}
            <aside className="hidden lg:block w-80 shrink-0">
              <Sidebar />
            </aside>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
