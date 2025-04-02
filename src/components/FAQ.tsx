
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does RocketVideosAI work?",
    answer: "RocketVideosAI uses artificial intelligence to convert your text into professional videos. Simply paste your script, choose a template, customize as needed, and the AI will generate your video with appropriate visuals, voiceovers, and music."
  },
  {
    question: "Do I need design or video editing skills?",
    answer: "No! RocketVideosAI is specifically designed for non-technical users. Our intuitive interface and AI technology handle all the complex parts of video creation, so you can focus on your message."
  },
  {
    question: "How many videos can I create?",
    answer: "This depends on your plan. The Standard plan includes 50 video credits per month, Pro includes 150 credits, and Agency offers unlimited video creation."
  },
  {
    question: "Can I use the videos for commercial purposes?",
    answer: "Yes, all plans include commercial usage rights. You can use the videos for your business, clients, or any commercial purpose."
  },
  {
    question: "What languages are supported?",
    answer: "RocketVideosAI supports over 75 languages for both script writing and voiceovers, making it perfect for global marketing campaigns."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied with RocketVideosAI for any reason, just let us know and we'll refund your payment."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-rocket-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked</span> Questions
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to know about RocketVideosAI
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:text-rocket-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
