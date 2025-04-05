
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "RocketVideosAI has transformed my marketing strategy. I'm creating professional videos in minutes that used to take days and cost thousands.",
    author: "Sarah Johnson",
    role: "Digital Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5
  },
  {
    quote: "As a small business owner, I never thought I could afford professional-looking videos. RocketVideosAI made it possible and our engagement has skyrocketed.",
    author: "Michael Chen",
    role: "E-commerce Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5
  },
  {
    quote: "The AI script generator alone is worth the price. It creates compelling marketing copy that converts like crazy. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Content Creator",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5
  },
  {
    quote: "We've cut our video production time by 90% while maintaining professional quality. Our clients are amazed at how quickly we deliver.",
    author: "David Williams",
    role: "Agency Owner",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-rocket-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">RocketVideosAI</span> Review
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See what our customers say about RocketVideosAI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <Avatar className="h-12 w-12 border-2 border-rocket-purple">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-rocket-purple text-white">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex text-rocket-orange mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg font-bold">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="mt-4 text-white/80 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
