import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/50 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-xl font-bold text-white">SecureAI</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-emerald-500 transition-colors">
              How it Works
            </a>
            <a href="/dashboard" className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
              Dashboard
            </a>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <a href="#features" className="block py-2 text-gray-300 hover:text-emerald-500">
              Features
            </a>
            <a href="#how-it-works" className="block py-2 text-gray-300 hover:text-emerald-500">
              How it Works
            </a>
            <a href="/dashboard" className="block py-2 text-emerald-500 hover:text-emerald-600">
              Dashboard
            </a>
          </div>
        )}
      </div>
    </header>
  );
}