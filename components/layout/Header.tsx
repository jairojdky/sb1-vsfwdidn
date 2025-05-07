"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Como Funciona', href: '/#como-funciona' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Orçamento', href: '/orcamento' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-200',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Oficina de Porcelanato</span>
          </Link>

          {/* Contact info - visible on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-1 text-blue-600" />
              <span>Rua Moinhos de Vento, 246, Sapiranga/RS</span>
            </div>
            <a 
              href="https://wa.me/5551997778490"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm"
            >
              <Phone className="h-4 w-4 mr-1 text-green-600" />
              <span>(51) 99777-8490</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 bg-blue-600 hover:bg-blue-700">
              <a href="https://wa.me/5551997778490" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md focus:outline-none"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                <span className="text-sm">Rua Moinhos de Vento, 246, Sapiranga/RS</span>
              </div>
              <a 
                href="https://wa.me/5551997778490"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Phone className="h-4 w-4 mr-2 text-green-600" />
                <span className="text-sm">(51) 99777-8490</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;