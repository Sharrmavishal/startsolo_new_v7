import React, { useEffect, useRef } from 'react';
import { Award, ExternalLink, Mic } from 'lucide-react';

const FeaturedInSection = () => {
  // Sample client logos - in a real implementation, these would be uploaded by the user
  const clientLogos = [
    {
      name: "Economic Times",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/1200px-Forbes_logo.svg.png"
    },
    {
      name: "Entrepreneur India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Entrepreneur_logo.svg/1200px-Entrepreneur_logo.svg.png"
    },
    {
      name: "Business Today",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Inc._magazine_logo.svg/1200px-Inc._magazine_logo.svg.png"
    },
    {
      name: "Business Standard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Business_Insider_Logo.svg/1200px-Business_Insider_Logo.svg.png"
    },
    {
      name: "YourStory",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Fast_Company_logo.svg/1200px-Fast_Company_logo.svg.png"
    },
    // Duplicate logos to create continuous scrolling effect
    {
      name: "Economic Times",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/1200px-Forbes_logo.svg.png"
    },
    {
      name: "Entrepreneur India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Entrepreneur_logo.svg/1200px-Entrepreneur_logo.svg.png"
    }
  ];

  const scrollRef = useRef(null);
  const duplicateRef = useRef(null);

  // Automatic scrolling animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const duplicateContainer = duplicateRef.current;
    
    if (!scrollContainer || !duplicateContainer) return;
    
    let animationId;
    let scrollPosition = 0;
    const speed = 0.5; // Adjust speed as needed
    
    const scroll = () => {
      scrollPosition += speed;
      
      // Reset position when first set of logos is scrolled out of view
      if (scrollPosition >= scrollContainer.offsetWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      duplicateContainer.style.transform = `translateX(-${scrollPosition}px)`;
      
      animationId = requestAnimationFrame(scroll);
    };
    
    scroll();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-4 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider mr-4">Trainings and Workshops</h3>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>
        
        {/* Logo ticker/tape */}
        <div className="relative">
          <div className="flex items-center whitespace-nowrap overflow-hidden">
            {/* First set of logos */}
            <div 
              ref={scrollRef}
              className="flex items-center space-x-12 py-2"
            >
              {clientLogos.map((client, index) => (
                <div 
                  key={`original-${index}`} 
                  className="grayscale hover:grayscale-0 transition duration-300"
                  title={client.name}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-6 md:h-8 object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for continuous scrolling */}
            <div 
              ref={duplicateRef}
              className="flex items-center space-x-12 py-2 absolute left-full"
            >
              {clientLogos.map((client, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="grayscale hover:grayscale-0 transition duration-300"
                  title={client.name}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-6 md:h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 text-center">
                <Mic className="h-12 w-12 text-accent mx-auto mb-2" />
                <h3 className="text-base font-bold text-gray-900">Dynamic LIVE Sessions</h3>
              </div>
              <div className="md:w-3/4 md:pl-6 md:border-l md:border-gray-200">
                <p className="text-gray-700 mb-3 text-sm">
                  The Start Solo Blueprint level course consistently achieves a 4.9-star rating from participants and stands recognized as the <span className="font-bold">"High Impact Session"</span> that has transformed the businesses of over 2,800 solopreneurs to date.
                </p>
                <a 
                  href="#testimonials" 
                  className="text-primary text-sm font-medium flex items-center hover:text-primary-dark transition"
                >
                  Read success stories <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;