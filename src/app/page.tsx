import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ourblog from "@/components/Ourblog";
import Ourinsta from "@/components/Ourinsta";
import Proddetail from "@/components/proddetail";
import Toppicks from "@/components/Toppics";
import Twoproduct from "@/components/Twoproducts";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Twoproduct/>
      <Proddetail/>
      <Toppicks/>
      <Ourblog/>
      <Ourinsta/>
      <Footer/>
    </div>
  );
}
