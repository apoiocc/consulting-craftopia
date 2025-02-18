
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-1 animate-float" />
        <div className="blob-2 animate-float" />
        <div className="blob-3 animate-float" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-screen flex items-center">
        <div className="glass max-w-2xl p-8 md:p-12 rounded-3xl animate-fadeIn">
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-6">
            Expert Technology Consulting
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Seamless Business Automation & System Setup
          </h1>
          <p className="text-xl text-primary/80 mb-8">
            We integrate and optimize the right tools to help your business run smoothly.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-primary/60 mb-4">Trusted by leading companies</p>
            <div className="flex items-center gap-8">
              <img src="/placeholder.svg" alt="Client Logo 1" className="h-8 opacity-50" />
              <img src="/placeholder.svg" alt="Client Logo 2" className="h-8 opacity-50" />
              <img src="/placeholder.svg" alt="Client Logo 3" className="h-8 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
