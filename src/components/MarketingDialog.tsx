
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

export const MarketingDialog = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show dialog after 10 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    try {
      // Here you would typically send this to your backend
      console.log("Email submitted:", email);
      
      // Show success state
      setSubmitted(true);
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Close dialog after 3 seconds
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">Get Free Consultation</DialogTitle>
              <DialogDescription className="text-base pt-2">
                Let's talk about your business and how we can automate the processes
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Get Started
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Thank You! 🎉</h3>
            <p className="text-muted-foreground">
              We'll be in touch with you shortly.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
