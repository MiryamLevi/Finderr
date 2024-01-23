import { Hero } from "../cmps/home/Hero";
import { Popular } from "../cmps/home/Popular";
import { SellingProposition } from "../cmps/home/SellingProposition";

export function Home() {
  return <section className="home main-layout full">
    <Hero/>
    <Popular/>
    <SellingProposition/>
  </section>
}
