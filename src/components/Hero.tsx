
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-1 animate-float" />
        <div className="blob-2 animate-float" />
        <div className="blob-3 animate-float" />
      </div>

      {/* Frosted Glass Container */}
      <div className="relative container mx-auto px-4 h-screen flex items-center">
        <div className="glass max-w-2xl p-8 md:p-12 rounded-3xl animate-fadeIn">
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-6">
            Welcome to the Future
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transform Your Digital Experience
          </h1>
          <p className="text-lg md:text-xl text-primary/80 mb-8">
            We create innovative solutions that bridge the gap between imagination and reality.
            Experience the next generation of digital transformation.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 hover:translate-y-[-2px] transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
