
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingOptions = [
  {
    name: "Standard",
    price: "$47",
    originalPrice: "$97",
    period: "one-time payment",
    description: "Perfect for solopreneurs and small businesses",
    features: [
      "50 Video Credits/Month",
      "60+ Video Templates",
      "100M+ Stock Assets",
      "720p Video Quality",
      "Basic Script Generator",
      "Standard Support",
      "Commercial Usage Rights"
    ],
    recommended: false,
    buttonText: "Get Standard"
  },
  {
    name: "Pro",
    price: "$67",
    originalPrice: "$197",
    period: "one-time payment",
    description: "Best for marketing teams and agencies",
    features: [
      "150 Video Credits/Month",
      "All Templates + Premium Ones",
      "100M+ Stock Assets",
      "1080p Video Quality",
      "Advanced Script Generator",
      "Priority Support",
      "Commercial Usage Rights",
      "White Label Export",
      "Team Collaboration (3 users)"
    ],
    recommended: true,
    buttonText: "Get Pro"
  },
  {
    name: "Agency",
    price: "$197",
    originalPrice: "$497",
    period: "one-time payment",
    description: "For agencies with multiple clients",
    features: [
      "Unlimited Video Credits",
      "All Templates + Priority Access",
      "100M+ Stock Assets",
      "4K Video Quality",
      "Advanced Script Generator",
      "24/7 VIP Support",
      "Commercial Usage Rights",
      "White Label Export",
      "Unlimited Team Collaboration",
      "Client Management Dashboard",
      "Dedicated Account Manager"
    ],
    recommended: false,
    buttonText: "Get Agency"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-rocket-blue/95 to-rocket-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Simple Pricing</span>, Incredible Value
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            One-time payment, lifetime access. No monthly subscriptions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden relative ${
                option.recommended 
                  ? 'border-2 border-rocket-purple shadow-lg shadow-rocket-purple/20' 
                  : 'border border-white/10'
              }`}
            >
              {option.recommended && (
                <div className="absolute top-0 right-0 bg-rocket-purple text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  RECOMMENDED
                </div>
              )}
              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-bold">{option.price}</span>
                  <span className="text-white/70 line-through mb-1">{option.originalPrice}</span>
                </div>
                <p className="text-white/70 mb-4">{option.period}</p>
                <p className="text-white/80">{option.description}</p>
                
                <div className="my-6">
                  <Button className={`w-full py-6 ${
                    option.recommended 
                      ? 'btn-primary' 
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}>
                    {option.buttonText}
                  </Button>
                </div>
                
                <ul className="space-y-3">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 ${
                        option.recommended ? 'text-rocket-purple' : 'text-rocket-orange'
                      }`} />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-white/60 max-w-2xl mx-auto">
            All plans include a 30-day money back guarantee. No questions asked.
            Prices shown are for the special launch period only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
