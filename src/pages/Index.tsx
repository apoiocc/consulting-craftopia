
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { MarketingDialog } from "@/components/MarketingDialog";

const Index = () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Services />
      <Benefits />
      <Footer />
      <MarketingDialog />
    </main>
  );
};

export default Index;
