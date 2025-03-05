import React from 'react';
import { CheckCircle, Target, TrendingUp, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Proven Framework",
      description: "Learn the exact step-by-step blueprint used by 500+ successful solo entrepreneurs to build profitable businesses."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Actionable Strategies",
      description: "Get practical, implementable strategies you can start using immediately to attract clients and generate income."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Avoid Common Pitfalls",
      description: "Discover the mistakes that cause most solo entrepreneurs to fail and learn how to navigate around them successfully."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Attend This Webinar?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In just 90 minutes, you'll gain insights that would take years of trial and error to discover on your own.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-tertiary-light/10 rounded-xl p-8 border border-tertiary-light/20">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Who This Webinar Is For</h3>
              <p className="text-gray-600">Perfect for aspiring entrepreneurs who want to start a business without employees or complex operations.</p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <ul className="space-y-3">
                {[
                  "Professionals looking to escape the 9-5 grind",
                  "Side-hustlers ready to go full-time",
                  "Freelancers wanting to build a more sustainable business",
                  "Anyone with expertise that can be monetized",
                  "People seeking location and time freedom"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-tertiary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;