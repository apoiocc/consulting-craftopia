
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">About</a></li>
              <li><a href="#" className="hover:opacity-80">Services</a></li>
              <li><a href="#" className="hover:opacity-80">Pricing</a></li>
              <li><a href="#" className="hover:opacity-80">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Business Automation</a></li>
              <li><a href="#" className="hover:opacity-80">Software Implementation</a></li>
              <li><a href="#" className="hover:opacity-80">Custom Integrations</a></li>
              <li><a href="#" className="hover:opacity-80">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              />
              <Button variant="secondary">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center md:text-left">
          <p className="text-white/60">© 2024 System Setup Services – All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
