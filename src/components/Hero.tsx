
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";
import { Check, Code, Laptop, Mail, Server } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create sphere
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: '#8B5CF6',
      shininess: 100,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.001;
        sphereRef.current.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      if (sphereRef.current) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        sphereRef.current.rotation.x = mouseY * 0.3;
        sphereRef.current.rotation.y = mouseX * 0.3;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-white to-secondary overflow-hidden">
        <div className="absolute inset-0 z-0" ref={containerRef} />
        <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
          <div className="max-w-3xl animate-fadeIn">
            <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-6">
              Expert Technology Consulting
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Let us build the system for you
            </h1>
            <p className="text-xl text-primary/80 mb-8">
              From websites to email automations, to advertising, to internal CRMs.
              The lowest price in the industry, with expert developers.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="w-8 h-8" />,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies."
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Automation",
                description: "Streamline your communication with automated email systems."
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "CRM Solutions",
                description: "Custom CRM systems to manage your customer relationships effectively."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$999",
                features: ["Website Development", "Basic SEO", "3 Month Support"]
              },
              {
                name: "Professional",
                price: "$2,499",
                features: ["Custom Web App", "Email Automation", "6 Month Support", "Priority Service"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Full CRM Solution", "24/7 Support", "Custom Integrations", "Dedicated Team"]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-primary w-5 h-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Choose Plan</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", icon: <Code className="w-12 h-12" /> },
              { name: "Node.js", icon: <Server className="w-12 h-12" /> },
              { name: "TypeScript", icon: <Code className="w-12 h-12" /> },
              { name: "Cloud Services", icon: <Server className="w-12 h-12" /> }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-6 text-center hover:scale-105 transition-transform">
                <div className="text-primary mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
