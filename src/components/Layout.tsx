import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem 1rem", minHeight: "80vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
