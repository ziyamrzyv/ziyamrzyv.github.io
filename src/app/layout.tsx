import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Providers from "./provider";              // 👈 eklendi
import Sidebar from "../../components/Sidebar";   // 👈 desktop menü (ayrı aside)

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ziya Mirzayev",
  description: "Portfolio • IT / DevOps",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >     {/* 👈 önemli */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Providers>                               {/* 👈 ThemeProvider */}
          <Navbar />                              {/* mobil üst bar + drawer */}

          {/* içerik alanı: desktop’ta aside sabit, mobilde gizli */}
          <div className="container mx-auto w-full flex-1 flex gap-6 px-4 py-6">
            <aside className="hidden lg:block w-72 shrink-0">
              <Sidebar />
            </aside>
            <main className="flex-1">
              {children}
            </main>
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
