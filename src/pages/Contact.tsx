
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you shortly.",
    });
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      business: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen w-full">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch to learn how we can help automate your business"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass p-8 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-primary mb-2">Name</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-primary mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-primary mb-2">Business Name</label>
                  <Input
                    id="business"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-primary mb-2">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:info@apoio.cc" 
                    className="flex items-center gap-3 text-primary/80 hover:text-primary"
                  >
                    <Mail className="w-5 h-5" />
                    info@apoio.cc
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center gap-3 text-primary/80 hover:text-primary"
                  >
                    <Phone className="w-5 h-5" />
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="glass p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Office Hours</h3>
                <p className="text-primary/80">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Weekend: By appointment only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Contact;
