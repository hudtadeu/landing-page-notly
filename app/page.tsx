import Reviews from "@/components/sections/reviews/reviews";
import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="empresas">
        <Logos />
      </section>
      <section id="funcionalidades">
        <Items />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="perguntas">
        <FAQ />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
