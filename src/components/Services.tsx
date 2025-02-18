
import { Cog, Database, Laptop, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Laptop,
    title: "Business Automation Setup",
    description: "We integrate powerful tools to streamline your operations and boost productivity.",
  },
  {
    icon: Server,
    title: "Software Implementation",
    description: "We help choose and set up the right software solutions for your business needs.",
  },
  {
    icon: Database,
    title: "Custom Integrations",
    description: "Need something unique? We build solutions tailored to your specific workflow.",
  },
  {
    icon: Cog,
    title: "Ongoing Support",
    description: "We don't just set it up, we ensure everything runs smoothly with 24/7 support.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What We Offer</h2>
          <p className="text-xl text-primary/60 max-w-2xl mx-auto">
            Comprehensive solutions to streamline your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="glass p-6 rounded-xl hover:translate-y-[-4px] transition-all duration-300">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-primary/70 mb-4">{service.description}</p>
              <Button variant="link" className="text-primary hover:text-primary/80 p-0">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
