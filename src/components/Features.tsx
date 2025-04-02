
import React from 'react';
import { 
  FileText, Play, Image, ArrowRight, BookOpen, Link, Check
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="text-rocket-purple h-10 w-10" />,
    title: "Text-to-Video",
    description: "Just paste your script and let AI create a professional video in minutes"
  },
  {
    icon: <Play className="text-rocket-orange h-10 w-10" />,
    title: "60+ Templates",
    description: "Choose from marketing, social media, product demos & more templates"
  },
  {
    icon: <Image className="text-rocket-lightBlue h-10 w-10" />,
    title: "100M+ Stock Assets",
    description: "Access to massive library of images, videos, and audio tracks"
  },
  {
    icon: <BookOpen className="text-rocket-purple h-10 w-10" />,
    title: "Script Generator",
    description: "AI writes high-converting scripts for your marketing videos"
  },
  {
    icon: <ArrowRight className="text-rocket-orange h-10 w-10" />,
    title: "Multi-Language",
    description: "Create videos in 75+ languages with natural-sounding voiceovers"
  },
  {
    icon: <Link className="text-rocket-lightBlue h-10 w-10" />,
    title: "Unlimited Export",
    description: "Download or directly share to social media in multiple formats"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-rocket-blue to-rocket-blue/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> to Rocket Your Marketing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to create professional marketing videos in one platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-rocket-purple/30 transition-all group"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-rocket-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 md:p-10 bg-gradient-to-r from-rocket-purple/20 to-rocket-orange/20 rounded-2xl border border-white/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                AI-Powered Video Creation at Your Fingertips
              </h3>
              <p className="text-white/70">
                From script to final video, RocketVideosAI handles everything. Just write your message, and our AI will transform it into a professional video with voiceover, music, and visuals.
              </p>
              <ul className="space-y-2">
                {[
                  "No technical skills required",
                  "Save thousands in video production costs",
                  "Create videos in minutes, not days",
                  "Consistent quality across all your marketing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-rocket-purple h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-xl shadow-rocket-purple/20 animate-pulse-glow">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="RocketVideosAI in action" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
