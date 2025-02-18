
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Save Time & Reduce Errors",
    description: "Automate repetitive tasks and minimize human error in your operations.",
  },
  {
    title: "Expert Setup, No Headaches",
    description: "Let our professionals handle the technical details while you focus on your business.",
  },
  {
    title: "24/7 Support for Any Issues",
    description: "Round-the-clock assistance ensures your systems are always running smoothly.",
  },
  {
    title: "Scalable Solutions for Growth",
    description: "Our solutions grow with your business, adapting to your changing needs.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us?</h2>
          <p className="text-xl text-primary/60 max-w-2xl mx-auto">
            Experience the difference with our expert system setup services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-primary/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
