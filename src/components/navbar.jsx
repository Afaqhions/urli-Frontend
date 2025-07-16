import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or use Heroicons/FontAwesome if preferred
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Urli
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow-lg">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/features" className="block text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/pricing" className="block text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
