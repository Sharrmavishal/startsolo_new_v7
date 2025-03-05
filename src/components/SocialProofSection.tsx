import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const SocialProofSection = () => {
  const featuredIn = [
    {
      name: "Forbes",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/1200px-Forbes_logo.svg.png"
    },
    {
      name: "Entrepreneur",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Entrepreneur_logo.svg/1200px-Entrepreneur_logo.svg.png"
    },
    {
      name: "Inc.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Inc._magazine_logo.svg/1200px-Inc._magazine_logo.svg.png"
    },
    {
      name: "Business Insider",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Business_Insider_Logo.svg/1200px-Business_Insider_Logo.svg.png"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-lg font-medium text-gray-600">AS FEATURED IN</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {featuredIn.map((publication, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition duration-300">
              <img 
                src={publication.logo} 
                alt={publication.name} 
                className="h-8 md:h-10 object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 text-center">
                <Award className="h-16 w-16 text-accent mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900">Award-Winning Methodology</h3>
              </div>
              <div className="md:w-2/3 md:pl-8 md:border-l md:border-gray-200">
                <p className="text-gray-700 mb-4">
                  The Start Solo Blueprint was recognized as the "Most Effective Business Framework for Solo Entrepreneurs" 
                  by the Entrepreneurship Association in 2024.
                </p>
                <a 
                  href="#" 
                  className="text-primary font-medium flex items-center hover:text-primary-dark transition"
                >
                  Read the case study <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;