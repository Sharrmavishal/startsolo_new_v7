import React from 'react';
import { MessageCircle, Users, FileText, Video, Calendar, ArrowRight, Bell } from 'lucide-react';
import { useContent } from './ContentProvider';

const WhatsAppHubSection = () => {
  const { whatsappHub } = useContent();
  
  // Use content from CMS or fallback to defaults
  const title = whatsappHub?.title || "Join Our Start Solo Hub on WhatsApp";
  const subtitle = whatsappHub?.subtitle || "Connect with like-minded solopreneurs and get exclusive resources";
  const tag = whatsappHub?.tag || "FREE COMMUNITY";
  const leftTitle = whatsappHub?.leftTitle || "Start Solo Hub";
  const leftDescription = whatsappHub?.leftDescription || 
    "Our WhatsApp community is the perfect place to stay connected, get support, and access exclusive resources on your solo journey.";
  
  const leftFeatures = whatsappHub?.leftFeatures || [
    {
      icon: "Users",
      title: "Supportive Community",
      description: "Connect with fellow solopreneurs who understand your challenges"
    },
    {
      icon: "Bell",
      title: "Event Notifications",
      description: "Be the first to know about upcoming speaker sessions and workshops"
    },
    {
      icon: "FileText",
      title: "Exclusive Resources",
      description: "Get access to premium tools, templates, guides, AI hacks, and tools not available elsewhere"
    }
  ];
  
  const rightTitle = whatsappHub?.rightTitle || "What You'll Get";
  const rightFeatures = whatsappHub?.rightFeatures || [
    {
      icon: "Calendar",
      title: "Weekly Tips & Challenges",
      description: "Actionable business tips and mini-challenges to help you make consistent progress"
    },
    {
      icon: "Video",
      title: "Speaker Session Access",
      description: "Join exclusive Q&As with industry experts and successful entrepreneurs"
    },
    {
      icon: "FileText",
      title: "Resource Library",
      description: "Access our growing library of templates, checklists, and guides"
    },
    {
      icon: "Users",
      title: "Networking Opportunities",
      description: "Connect with potential collaborators, clients, and mentors"
    }
  ];
  
  const howToJoinCard = whatsappHub?.howToJoinCard || {
    title: "How to Join",
    description: "Joining our WhatsApp Hub is completely free and takes just seconds. Simply click the button below to join.",
    note: "Note: All session participants and course students are automatically invited to join."
  };
  
  const ctaButtons = whatsappHub?.ctaButtons || {
    whatsappText: "Join Our WhatsApp Hub",
    whatsappUrl: "#",
    sessionText: "Register for Session",
    sessionUrl: "#webinar-dates"
  };

  // Function to render the correct icon component
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />;
      case 'Bell':
        return <Bell className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />;
      case 'FileText':
        return <FileText className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />;
      case 'Video':
        return <Video className="h-8 w-8 text-green-600 mb-3" />;
      case 'Calendar':
        return <Calendar className="h-8 w-8 text-green-600 mb-3" />;
      default:
        return <MessageCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />;
    }
  };

  return (
    <section id="whatsapp-hub" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full mb-4 font-medium">
            {tag}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-2/5 bg-[#25D366] text-white p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-10 w-10 mr-3" />
                  <h3 className="text-2xl font-bold">{leftTitle}</h3>
                </div>
                <p className="mb-8">
                  {leftDescription}
                </p>
                <div className="space-y-4">
                  {leftFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      {renderIcon(feature.icon)}
                      <div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-white/90 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{rightTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {rightFeatures.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                      {feature.icon === 'Calendar' || feature.icon === 'Video' || feature.icon === 'FileText' || feature.icon === 'Users' ? 
                        renderIcon(feature.icon) : 
                        <Calendar className="h-8 w-8 text-green-600 mb-3" />
                      }
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-6">
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-2 mr-4">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{howToJoinCard.title}</h4>
                      <p className="text-gray-700 mb-3">
                        {howToJoinCard.description}
                      </p>
                      <p className="text-sm text-gray-600">
                        {howToJoinCard.note}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
                  <a 
                    href={ctaButtons.whatsappUrl} 
                    className="bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-[#128C7E] transition flex items-center justify-center"
                    data-tracking="whatsapp-hub-join-button"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    {ctaButtons.whatsappText} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a 
                    href={ctaButtons.sessionUrl} 
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center justify-center"
                    data-tracking="whatsapp-hub-session-button"
                  >
                    {ctaButtons.sessionText} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppHubSection;