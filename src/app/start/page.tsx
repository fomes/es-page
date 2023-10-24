import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SideNavBar } from "@/components/SideNavBar";
import React from "react";

export default function Start() {
  return (
    <main className="py-8 px-28 bg-home h-screen">
      <SideNavBar />
      <Header />
      <Footer />
    </main>
  );
}
