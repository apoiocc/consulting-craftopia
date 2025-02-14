
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";

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
    <div className="relative min-h-screen bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0" ref={containerRef} />
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-3xl animate-fadeIn">
          <span className="inline-block px-3 py-1 text-sm bg-accent/10 text-accent rounded-full mb-6">
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
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
