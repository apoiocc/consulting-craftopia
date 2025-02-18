
import { Cog, Database, Laptop, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Laptop,
    title: "Business Automation Setup",
    description: "Connect and configure automation tools to streamline your operations and boost productivity.",
  },
  {
    icon: Server,
    title: "Software Implementation",
    description: "Expert installation and optimization of business software tailored to your needs.",
  },
  {
    icon: Database,
    title: "Custom Integrations",
    description: "API-based solutions and custom development for your unique workflow requirements.",
  },
  {
    icon: Cog,
    title: "Ongoing Support",
    description: "Continuous monitoring, optimization, and 24/7 support to ensure smooth operations.",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="glass p-8 rounded-3xl">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-primary/80 mb-6">{service.description}</p>
              <Button variant="outline">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
