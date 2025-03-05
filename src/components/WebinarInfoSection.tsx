import React from 'react';
import { CheckCircle, Target, TrendingUp, Shield, Clock, Calendar, ArrowRight, Rocket, Lightbulb, Zap } from 'lucide-react';
import { useContent } from './ContentProvider';

const WebinarInfoSection = () => {
  const { webinarInfo, general, course } = useContent();
  
  // Cohort start date from CMS or use fallback
  const cohortStartDate = general?.cohortStartDate || "June 15, 2025";
  
  const benefits = webinarInfo?.benefits || [
    {
      icon: "Target",
      title: "Proven Framework",
      description: "Learn the exact step-by-step blueprint used by 2800+ successful solo entrepreneurs to build profitable businesses."
    },
    {
      icon: "TrendingUp",
      title: "Actionable Strategies",
      description: "Get practical, implementable strategies you can start using immediately to attract clients and generate income."
    },
    {
      icon: "Shield",
      title: "Avoid Common Pitfalls",
      description: "Discover the mistakes that cause most solo entrepreneurs to fail and learn how to navigate around them successfully."
    }
  ];

  // Render the correct icon component based on the icon name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Target':
        return <Target className="h-12 w-12 text-primary" />;
      case 'TrendingUp':
        return <TrendingUp className="h-12 w-12 text-primary" />;
      case 'Shield':
        return <Shield className="h-12 w-12 text-primary" />;
      default:
        return <Target className="h-12 w-12 text-primary" />;
    }
  };

  // Streamlined learning points with updated content
  const learningPoints = [
    {
      title: "Why Solopreneurship is the Future",
      description: "Discover why now is the perfect time to start your solo business journey",
      icon: <Rocket className="h-10 w-10 text-primary" />
    },
    {
      title: "Finding Your Profitable Niche",
      description: "Identify a niche that matches your skills and has real market demand",
      icon: <Target className="h-10 w-10 text-primary" />
    },
    {
      title: "Creating an Irresistible Offer",
      description: "Package your expertise with effective branding, pricing, and messaging",
      icon: <Lightbulb className="h-10 w-10 text-primary" />
    },
    {
      title: "The Start Solo Blueprint",
      description: "Get a step-by-step roadmap to build your business with confidence",
      icon: <CheckCircle className="h-10 w-10 text-primary" />
    },
    {
      title: "Client Acquisition Made Simple",
      description: "Learn practical strategies to attract and convert high-quality clients",
      icon: <TrendingUp className="h-10 w-10 text-primary" />
    },
    {
      title: "Scaling Without Burnout",
      description: "Use automation and systems to grow without working 24/7",
      icon: <Shield className="h-10 w-10 text-primary" />
    },
    {
      title: "Live Q&A + Expert Insights",
      description: "Get your questions answered and hear from successful entrepreneurs",
      icon: <Zap className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="webinar-info" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-light/20 text-primary-dark px-4 py-1 rounded-full mb-4 font-medium">
            {webinarInfo?.tag || "WHY ATTEND THIS SESSION"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The 90-Min Solo Accelerator Session: Your Launchpad to Freedom!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thinking about starting your solo business but feeling stuck? This power-packed 90-minute webinar will give you the clarity, confidence, and game plan to take the leap—without any risks
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
                <div className="mb-6">{renderIcon(benefit.icon)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* What You'll Learn Section with Streamlined Content */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What You'll Learn in This Session</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningPoints.map((point, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all duration-200 border border-gray-100">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{point.title}</h3>
                        <p className="text-gray-700 text-sm">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-secondary-light/10 p-6 rounded-lg border border-secondary-light/20">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 text-center">
                    <Calendar className="h-12 w-12 text-secondary mx-auto mb-2" />
                    <h4 className="font-bold text-gray-900">Next Session</h4>
                    <p className="text-gray-600">{webinarInfo?.sessionDetails?.nextSession || `Starts ${cohortStartDate}`}</p>
                  </div>
                  <div className="md:w-1/3 mb-6 md:mb-0 text-center">
                    <Clock className="h-12 w-12 text-secondary mx-auto mb-2" />
                    <h4 className="font-bold text-gray-900">{webinarInfo?.sessionDetails?.duration || "90 Minutes"}</h4>
                    <p className="text-gray-600">Packed with value</p>
                  </div>
                  <div className="md:w-1/3 text-center">
                    <div className="bg-white text-primary rounded-full p-4 inline-block">
                      <div className="text-3xl font-bold">{webinarInfo?.sessionDetails?.fee || "₹99"}</div>
                      <div className="text-sm">Registration Fee</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href={webinarInfo?.ctaButton?.url || "#webinar-dates"} 
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center justify-center"
                >
                  Reserve Your Spot Now! <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarInfoSection;