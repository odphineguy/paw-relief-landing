import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img src="/uploads/icon-iOS-Default-1024x1024@1x.png" alt="Paw Relief Logo" className="h-10 w-10 rounded-lg" />
          <span className="text-2xl font-bold text-gray-800">Paw Relief</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Home</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
        </div>
        
        {/* CTA Button */}
        <span className="hidden md:block bg-gray-400 text-white px-6 py-2 rounded-full cursor-default">
          Coming Soon
        </span>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Pricing</a>
            <span className="bg-gray-400 text-white py-2 px-4 rounded-full text-center cursor-default">Coming Soon</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;
