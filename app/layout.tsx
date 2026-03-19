import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar"; // Import the new TopBar
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMX Info Management | Records & Digitization Services",
  description: "Official OMX Info Management (OM Group) website. Specialized in Records management, Scanning, and Secure Destruction.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* Fixed Header Container */}
        <header className="fixed top-0 w-full z-50">
          <TopBar />
          <Navbar />
        </header>

        {/* Adjusted padding (pt-44) to account for TopBar + Navbar height */}
        <main className="min-h-screen pt-44 bg-white">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}