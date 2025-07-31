import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Moon, 
  Sun, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ShoppingCart, 
  Heart, 
  Star,
  Menu,
  X
} from 'lucide-react';
import { ParallaxHero } from '@/components/ParallaxHero';
import { Product3D } from '@/components/Product3D';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { AudioPlayer } from '@/components/AudioPlayer';
import { ScrollProgress } from '@/components/ScrollProgress';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const products = [
    {
      id: 1,
      name: "Luxury Diamond Watch",
      price: 15999,
      image: "/placeholder.svg",
      rating: 5,
      category: "Watches",
      description: "Handcrafted with precision and elegance"
    },
    {
      id: 2,
      name: "Premium Leather Handbag",
      price: 2999,
      image: "/placeholder.svg",
      rating: 4.8,
      category: "Bags",
      description: "Italian leather craftsmanship"
    },
    {
      id: 3,
      name: "Golden Jewelry Set",
      price: 8999,
      image: "/placeholder.svg",
      rating: 4.9,
      category: "Jewelry",
      description: "24K gold plated luxury collection"
    },
    {
      id: 4,
      name: "Designer Sunglasses",
      price: 1299,
      image: "/placeholder.svg",
      rating: 4.7,
      category: "Accessories",
      description: "UV protection with style"
    }
  ];

  useEffect(() => {
    // Apply dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // GSAP ScrollTrigger animations
    const ctx = gsap.context(() => {
      // Smooth scroll setup
      gsap.to(window, {
        duration: 1,
        ease: "power2.out"
      });

      // Parallax sections
      gsap.utils.toArray(".parallax-section").forEach((section: any) => {
        gsap.to(section, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Product cards animation
      gsap.utils.toArray(".product-card").forEach((card: any, index) => {
        gsap.fromTo(card, 
          { 
            y: 100, 
            opacity: 0, 
            rotateY: 45,
            scale: 0.8 
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // 3D text animation
      gsap.fromTo(".hero-title", 
        { 
          y: 200, 
          opacity: 0,
          rotateX: 90,
          transformPerspective: 1000
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top 80%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: productsRef, inView: productsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen transition-all duration-1000 ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      <ScrollProgress />
      <AudioPlayer />
      
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <ParallaxHero isDark={isDark} />
        
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className={`hero-title text-6xl md:text-8xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                LUXURY
              </span>
              <br />
              COLLECTION
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover extraordinary pieces that define elegance
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
              >
                Explore Collection
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3D Product Showcase */}
      <section className="py-20 parallax-section">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Products
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 lg:h-[500px]">
              <Canvas>
                <Product3D productIndex={currentProduct} />
              </Canvas>
            </div>
            
            <div className="space-y-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    currentProduct === index
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500'
                      : isDark 
                        ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                        : 'bg-white/50 hover:bg-white/70'
                  }`}
                  onClick={() => setCurrentProduct(index)}
                >
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {product.name}
                  </h3>
                  <p className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    ${product.price.toLocaleString()}
                  </p>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-20 parallax-section">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Collection
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${
        isDark ? 'bg-gray-900' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <h3 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Luxury Collection
          </h3>
          <p className={`${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2024 Luxury Collection. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
