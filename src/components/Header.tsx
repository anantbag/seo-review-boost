import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-glass border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-white">SEOMarket</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-smooth">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-smooth">Pricing</a>
            <a href="#about" className="text-white/80 hover:text-white transition-smooth">About</a>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Login
            </Button>
            <Button className="gradient-primary text-white font-medium hover-glow">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-white/80 hover:text-white transition-smooth">Features</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-smooth">Pricing</a>
              <a href="#about" className="text-white/80 hover:text-white transition-smooth">About</a>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full">
                Login
              </Button>
              <Button className="gradient-primary text-white font-medium w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;