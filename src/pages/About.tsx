
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

const About = () => {
  return (
    <main className="min-h-screen w-full">
      <PageHeader 
        title="About Us" 
        description="Learn how we help businesses automate and optimize their systems"
      />
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-primary/80 mb-8">
              At Apoio, we believe that every business deserves to operate at its full potential. 
              Our mission is to eliminate manual tasks and streamline operations through intelligent 
              system automation, allowing businesses to focus on what truly matters - growth and innovation.
            </p>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Approach</h3>
            <ul className="space-y-4 text-primary/80">
              <li className="flex items-start gap-3">
                <span className="text-primary">1.</span>
                <p>We evaluate your current business processes and identify automation opportunities.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">2.</span>
                <p>Our team recommends the best tools and systems based on your specific needs.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">3.</span>
                <p>We handle the entire setup process, ensuring seamless integration.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">4.</span>
                <p>Continuous support and optimization keep your systems running efficiently.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <Benefits />
      <Footer />
    </main>
  );
};

export default About;
