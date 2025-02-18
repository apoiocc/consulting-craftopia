
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses starting with automation",
    features: [
      "Basic system setup",
      "Essential automation tools",
      "Email support",
      "1 workflow automation",
      "Basic integration setup",
    ],
  },
  {
    name: "Business",
    price: "999",
    description: "Ideal for growing businesses needing full automation",
    features: [
      "Full automation setup",
      "Multiple integrations",
      "Priority support",
      "3 workflow automations",
      "Advanced reporting",
      "Training sessions",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom solutions for large organizations",
    features: [
      "Custom setup & development",
      "Dedicated support team",
      "Unlimited automations",
      "API development",
      "24/7 priority support",
      "Custom training program",
    ],
  },
];

const Pricing = () => {
  return (
    <main className="min-h-screen w-full">
      <PageHeader 
        title="Pricing Plans" 
        description="Choose the perfect plan for your business needs"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`glass p-8 rounded-3xl relative ${
                  plan.popular ? "border-2 border-primary" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-primary/60 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-primary">${plan.price}</span>
                      <span className="text-primary/60 ml-2">/month</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-primary">Contact Us</div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-primary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Pricing;
