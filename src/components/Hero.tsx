
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video } from 'lucide-react';

const Hero = () => {
  const affiliateLinkUrl = 'https://jvz6.com/c/3324701/416541/';
  
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(affiliateLinkUrl, '_blank');
    console.log('Button clicked, opening:', affiliateLinkUrl);
  };

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Create Stunning <span className="gradient-text">Marketing Videos</span> in Minutes with AI
            </h1>
            
            <p className="text-xl text-white/70">
              Revolutionary AI-powered platform that transforms your text into professional videos. No design skills needed. 60+ templates & 100 million+ stock assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={affiliateLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="btn-primary text-lg flex items-center gap-2 w-full"
                  onClick={handleButtonClick}
                >
                  Get Started Now
                  <ArrowRight size={18} />
                </Button>
              </a>
              <a 
                href={affiliateLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  className="border-rocket-purple text-white text-lg flex items-center gap-2 w-full"
                >
                  <Video size={18} />
                  See Examples
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0"
                    style={{ zIndex: 5 - i }}
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm">
                <span className="text-rocket-orange font-bold">2,500+</span> marketers trust RocketVideosAI
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-rocket-purple/30 animate-float shadow-xl shadow-rocket-purple/20">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="RocketVideosAI Dashboard" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rocket-blue via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-rocket-orange text-white p-3 rounded-lg shadow-lg">
              <span className="font-bold">100% No Coding Required!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
