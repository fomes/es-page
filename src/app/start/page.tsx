import { BuildingsSection } from "@/components/BuildingsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SideNavBar } from "@/components/SideNavBar";
import { StartMainSection } from "@/components/StartMainSection";
import React from "react";

export default function Start() {
  return (
    <main className="py-8 px-28 bg-home h-screen">
      <SideNavBar />
      <Header />
      <StartMainSection />
      <BuildingsSection />
      <Footer />
    </main>
  );
}
