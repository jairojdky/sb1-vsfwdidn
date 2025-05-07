"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const carouselImages = [
  {
    url: "https://images.pexels.com/photos/6207827/pexels-photo-6207827.jpeg",
    alt: "Bancada de porcelanato personalizada em cozinha moderna",
    title: "Bancadas Personalizadas"
  },
  {
    url: "https://images.pexels.com/photos/7937366/pexels-photo-7937366.jpeg",
    alt: "Pia de porcelanato em banheiro elegante",
    title: "Pias e Cubas Integradas"
  },
  {
    url: "https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg",
    alt: "Nicho de porcelanato em sala de estar",
    title: "Nichos e Detalhes Especiais"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const next = () => {
    setCurrent((current + 1) % carouselImages.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, isAutoPlaying]);

  // Pause auto play when user interacts
  const handleManualChange = (callback: () => void) => {
    setIsAutoPlaying(false);
    callback();
    
    // Resume auto play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === current ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl px-4">
                {image.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl px-4">
                Transformamos porcelanato em peças exclusivas para o seu projeto
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="/orcamento">Solicitar Orçamento</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
                  <a href="/galeria">Ver Projetos</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={() => handleManualChange(prev)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => handleManualChange(next)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualChange(() => setCurrent(index))}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === current ? "bg-white" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;