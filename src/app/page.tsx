import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection } from "@/components/MainSection";
import { SideNavBar } from "@/components/SideNavBar";

export default function Home() {
  return (
    <main className="py-8 px-28">
      <SideNavBar />
      <Header />
      <MainSection />
      <Footer />
    </main>
  );
}
