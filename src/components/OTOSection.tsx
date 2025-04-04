
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface OTOItem {
  id: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

const OTOSection = () => {
  const otoItems: OTOItem[] = [
    {
      id: "416565",
      title: "OTO 1: RocketVideosAI Pro",
      description: "Débloquez des fonctionnalités avancées et sans limites pour vos vidéos.",
      price: "$67",
      link: "https://jvz6.com/c/3324701/416565/"
    },
    {
      id: "416567",
      title: "OTO 2: RocketVideosAI Agency",
      description: "Licence agence pour gérer les comptes de plusieurs clients.",
      price: "$97",
      link: "https://jvz6.com/c/3324701/416567/"
    },
    {
      id: "416568",
      title: "OTO 3: RocketVideosAI Enterprise",
      description: "Fonctionnalités de niveau entreprise et support dédié.",
      price: "$147",
      link: "https://jvz6.com/c/3324701/416568/"
    },
    {
      id: "416570",
      title: "OTO 4: RocketVideosAI DFY",
      description: "Vidéos prêtes à l'emploi pour votre marketing.",
      price: "$197",
      link: "https://jvz6.com/c/3324701/416570/"
    },
    {
      id: "416572",
      title: "OTO 5: RocketVideosAI Reseller",
      description: "Revendez RocketVideosAI et gardez 100% des profits.",
      price: "$297",
      link: "https://jvz6.com/c/3324701/416572/"
    },
    {
      id: "416563",
      title: "OTO 6: RocketVideosAI Bundle",
      description: "Pack complet avec toutes les fonctionnalités à prix réduit.",
      price: "$497",
      link: "https://jvz6.com/c/3324701/416563/"
    }
  ];

  const handleOTOClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    window.open(link, '_blank');
    console.log('OTO clicked, opening:', link);
  };

  return (
    <section id="oto" className="py-20 bg-gradient-to-b from-black to-rocket-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Offres Exclusives</span> à Durée Limitée
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Améliorez votre expérience avec ces modules complémentaires premium.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otoItems.map((oto) => (
            <Card key={oto.id} className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-white">{oto.title}</CardTitle>
                <CardDescription className="text-white/70">{oto.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-rocket-orange">{oto.price}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href={oto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    className="w-full bg-rocket-purple hover:bg-rocket-purple/90 text-white flex items-center justify-center gap-2"
                    onClick={(e) => handleOTOClick(e, oto.link)}
                  >
                    Obtenir cette Offre
                    <ArrowRight size={16} />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OTOSection;
