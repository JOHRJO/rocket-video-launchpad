
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rocket-blue/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white flex items-center">
            Rocket<span className="text-rocket-purple">Videos</span>
            <span className="text-rocket-orange text-xl ml-1">AI</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
        </div>
        
        <div>
          <Button className="bg-rocket-orange hover:bg-rocket-orange/90 text-white flex items-center gap-2">
            <Play size={16} />
            Demo Video
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
