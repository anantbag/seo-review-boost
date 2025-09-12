import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-white">SEOMarket</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Transform your business with powerful review management. 
              Join thousands of businesses boosting their customer engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Integrations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 SEOMarket. All rights reserved. Empowering businesses through reviews.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;