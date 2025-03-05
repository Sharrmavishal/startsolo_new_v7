import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Menu, X } from 'lucide-react';
import { useContent } from './ContentProvider';

const Header = () => {
  const { header } = useContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">{header.logoText}</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {header.navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className="text-gray-600 hover:text-primary transition"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
          <a 
            href={header.ctaButton.url} 
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition flex items-center"
            data-tracking={header.ctaButton.trackingId}
          >
            {header.ctaButton.text} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-100 z-50">
            <nav className="flex flex-col space-y-4">
              {header.navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="text-gray-600 hover:text-primary transition py-2"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-100 flex flex-col space-y-3">
                <a 
                  href={header.ctaButton.url} 
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition flex items-center justify-center"
                  data-tracking={`${header.ctaButton.trackingId}-mobile`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {header.mobileMenu.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;