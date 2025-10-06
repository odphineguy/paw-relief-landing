import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src="/uploads/daylight.svg" alt="Paw Relief Logo" className="h-12 w-auto" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Home</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#screenshots" className="text-gray-600 hover:text-blue-600 transition-colors">Screenshots</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
        </div>
        
        {/* CTA Button */}
        <a 
          href="#download" 
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Download App
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#home" className="text-blue-600 font-medium py-2">Home</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Features</a>
            <a href="#screenshots" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Screenshots</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Testimonials</a>
            <a href="#download" className="text-white bg-blue-600 hover:bg-blue-700 transition-colors py-2 px-4 rounded-full text-center">Download App</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;
