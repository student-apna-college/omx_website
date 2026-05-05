import TopBarWrapper from "@/components/TopBarWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50">
        <TopBarWrapper />
        <Navbar />
      </header>

      {/* MAIN */}
      <main className="pt-[120px] md:pt-[140px]">
        {children}
      </main>

      <Footer />
    </>
  );
}