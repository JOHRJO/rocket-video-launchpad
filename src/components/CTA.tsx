
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-rocket-blue to-black">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-rocket-purple/20 to-rocket-orange/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-rocket-purple/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-rocket-orange/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform Your Marketing</span> with AI-Powered Videos?
            </h2>
            
            <p className="text-xl text-white/70 mb-8">
              Join thousands of marketers creating stunning videos in minutes. Special launch pricing available now!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-primary text-lg px-8 py-6 flex items-center gap-2">
                Get Started Now
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="border-rocket-purple text-white text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 text-white/60 flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rocket-purple" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
