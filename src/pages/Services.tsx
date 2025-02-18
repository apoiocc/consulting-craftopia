
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SystemSetups } from "@/components/SystemSetups";

const Services = () => {
  return (
    <main className="min-h-screen w-full">
      <PageHeader 
        title="Our Services" 
        description="Comprehensive system setup and automation solutions for your business"
      />
      <ServicesGrid />
      <SystemSetups />
      <Footer />
    </main>
  );
};

export default Services;
