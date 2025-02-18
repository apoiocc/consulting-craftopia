
import { MessageSquare, ShoppingCart, Trello, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const setups = [
  {
    icon: MessageSquare,
    title: "Automate Customer Support",
    scenario: "A business wants to reduce response times.",
    solution: "Connect HubSpot, Zendesk, and AI chatbots to automate ticket handling.",
  },
  {
    icon: ShoppingCart,
    title: "Sync E-commerce Orders & Inventory",
    scenario: "An online store struggles with inventory updates.",
    solution: "Integrate Shopify, QuickBooks, and warehouse management software to keep stock levels accurate.",
  },
  {
    icon: Trello,
    title: "Streamline Project Management",
    scenario: "A remote team is losing track of tasks.",
    solution: "Connect Trello, Slack, and Google Drive for seamless team collaboration.",
  },
  {
    icon: Calendar,
    title: "Automate Appointment Bookings",
    scenario: "A business is missing client appointments.",
    solution: "Link Calendly, Zoom, and Google Calendar to auto-schedule meetings.",
  },
];

export const SystemSetups = () => {
  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Sample System Setups</h2>
          <p className="text-xl text-primary/60 max-w-2xl mx-auto">
            Real-world examples of how businesses benefit from our automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {setups.map((setup) => (
            <div key={setup.title} className="glass p-8 rounded-3xl">
              <setup.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">{setup.title}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Scenario:</h4>
                  <p className="text-primary/80">{setup.scenario}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Solution:</h4>
                  <p className="text-primary/80">{setup.solution}</p>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
