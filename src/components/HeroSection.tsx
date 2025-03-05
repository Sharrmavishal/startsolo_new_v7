import React from 'react';
import { ArrowRight, Play, Clock, BookOpen, Users, Star, Calendar, Tag, CheckCircle, Shield, ChevronRight } from 'lucide-react';
import { useContent } from './ContentProvider';

const HeroSection = () => {
  const { hero, general } = useContent();
  
  // Get video ID from CMS or use null as fallback
  const videoId = hero?.videoId || null;
  
  // Sample solopreneur images - in a real implementation, these would be dynamically loaded
  const solopreneurImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
  ];

  // Cohort start date from CMS or use fallback
  const cohortStartDate = general?.cohortStartDate || "June 15, 2025";
  
  // Get content from CMS or use fallbacks
  const highlight = hero?.highlight || `NEXT COHORT STARTS ${cohortStartDate} - JUST ₹99`;
  const heading = hero?.heading || "Start a **Profitable** Solo Business, **But Not Alone**";
  const subheading = hero?.subheading || "Tired of waiting for the \"right time\" to start? The Start Solo Blueprint is your game-changer. No fluff, no overwhelming jargon—just a clear, actionable roadmap to help you launch, grow, and scale as a Solopreneur, but not alone. Whether you're a freelancer, coach, consultant, or creative genius, this is your sign to be your own boss—on your own terms.";
  
  // Format markdown in heading (bold text)
  const formattedHeading = heading.replace(/\*\*(.*?)\*\*/g, '<span class="text-primary relative">$1<svg class="absolute bottom-1 left-0 w-full h-3 text-primary-light/30" viewBox="0 0 200 8" preserveAspectRatio="none"><path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" stroke-width="3" fill="none" /></svg></span>');
  
  // What You'll Discover points
  const discoverPoints = hero?.keyPoints || [
    "The Step by Step Solopreneur's Blueprint to build a profitable solo business",
    "Branding & marketing hacks that actually work",
    "How to attract & retain clients (without being pushy for sales)",
    "The mindset shifts you need to succeed"
  ];
  
  // Who Should Attend points
  const attendPoints = [
    "Freelancers, consultants, coaches & small business owners",
    "Side hustlers ready to go full-time",
    "Creatives & experts wanting to monetise their skills"
  ];
  
  // Why Attend content
  const whyAttendText = "Because you deserve more than just a pay-check—you deserve freedom, fulfilment, and a thriving business. Let's make it happen! 🚀";
  
  const primaryButton = hero?.primaryButton || { text: "Register Now - Just ₹99", url: "#webinar-dates" };
  const secondaryButton = hero?.secondaryButton || { text: "Meet Your Instructor", url: "#instructor" };
  const previewImage = hero?.previewImage || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const sessionDuration = hero?.sessionDuration || "90 Minutes";
  const sessionPrice = hero?.sessionPrice || "₹99";
  const originalPrice = hero?.originalPrice || "₹999";
  const participantsCount = hero?.participantsCount || "2800+";

  return (
    <section id="webinar" className="py-16 md:py-24 bg-gradient-to-br from-primary-light/10 via-white to-secondary-light/10">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Left Column - Main Headline and CTA */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="inline-block bg-highlight/90 text-white px-4 py-1.5 rounded-full mb-6 font-medium animate-pulse shadow-sm">
              <Calendar className="h-4 w-4 inline mr-1.5" /> {highlight}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" dangerouslySetInnerHTML={{ __html: formattedHeading }}>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {subheading}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a 
                href={primaryButton.url} 
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition flex items-center justify-center shadow-lg transform hover:translate-y-[-2px] duration-200"
                aria-label="Reserve your spot for the Solo Accelerator Session for just ₹99"
                data-tracking={primaryButton.trackingId}
              >
                {primaryButton.text} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href={secondaryButton.url} 
                className="border-2 border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition flex items-center justify-center"
                aria-label="Explore the full course details"
                data-tracking={secondaryButton.trackingId}
              >
                {secondaryButton.text} <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {solopreneurImages.slice(0, 6).map((image, i) => (
                  <img 
                    key={i}
                    src={image} 
                    alt={`Solopreneur ${i+1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  2.8k+
                </div>
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-bold text-primary">{participantsCount}</span> happy solopreneurs
              </p>
            </div>
          </div>
          
          {/* Right Column - Video/Image and Session Details */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-highlight text-white px-4 py-2 rounded-lg z-10 shadow-md animate-pulse">
                <span className="font-bold">Limited Seats!</span> Only 20 per session
              </div>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl border border-gray-100">
                <div className="relative">
                  {videoId ? (
                    <div className="aspect-video">
                      <iframe 
                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                        title="Solo Accelerator Session Preview"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="relative">
                      <img 
                        src={previewImage} 
                        alt="Solo Accelerator Session Preview" 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                        <button className="bg-white/90 hover:bg-white text-primary p-4 rounded-full shadow-lg transform transition hover:scale-110">
                          <Play className="h-8 w-8 fill-current" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">Multiple Dates</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">{sessionDuration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">Limited Seats</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-accent">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">4.85 (389 reviews)</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{sessionPrice} <span className="text-lg line-through text-gray-500">{originalPrice}</span></div>
                      <p className="text-sm text-gray-500 mt-1">One-time registration fee</p>
                    </div>
                    <div className="bg-tertiary/20 text-tertiary-dark px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Tag className="h-4 w-4 mr-1" /> 90% off this week only!
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="#webinar-dates" className="block w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-primary-dark transition text-center font-medium">
                      Choose Your Session Date <ArrowRight className="ml-1 h-4 w-4 inline-block" />
                    </a>
                    <div className="mt-3 flex justify-center items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 mr-1 text-tertiary" />
                      <span>100% Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Three-column section for What You'll Discover, Who Should Attend, and Why Attend */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* What You'll Discover */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
            <h3 className="font-bold text-gray-900 mb-4">🔥 What You'll Discover:</h3>
            <ul className="space-y-3">
              {discoverPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-2">✔</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Who Should Attend */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <h3 className="font-bold text-gray-900 mb-4">🎯 Who Should Attend?</h3>
            <ul className="space-y-3">
              {attendPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary font-bold mr-2">✅</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Why Attend */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tertiary">
            <h3 className="font-bold text-gray-900 mb-4">💡 Why Attend?</h3>
            <p className="text-gray-700 mb-4">
              {whyAttendText}
            </p>
            <a 
              href="#webinar-dates" 
              className="inline-flex items-center text-tertiary hover:text-tertiary-dark font-medium"
            >
              Choose your session date <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;