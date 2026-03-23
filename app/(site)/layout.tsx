import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <TopBar />
        <Navbar />
      </header>

      <main className="pt-44">
        {children}
      </main>

      <Footer />
    </>
  );
}