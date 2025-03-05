import React from 'react';
import { Calendar, Video, BookOpen, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { useContent } from './ContentProvider';

const JourneySection = () => {
  const { journey, general } = useContent();
  
  // Cohort start date from CMS or use fallback
  const cohortStartDate = general?.cohortStartDate || "June 15, 2025";
  
  // Get content from CMS or use fallbacks
  const title = journey?.title || "Your Path to Success";
  const subtitle = journey?.subtitle || "Understand exactly how our two-step approach helps you build a successful solo business";
  
  // Step 1 content
  const step1 = journey?.step1 || {
    title: "Join the Solo Accelerator Session",
    description: "Join our 90-minute session for just ₹99 where you'll learn key strategies and get a taste of our complete framework.",
    linkText: "Learn more about the session",
    linkUrl: "#webinar-info",
    features: [
      "90-minute interactive session",
      "Learn essential course material",
      "Discover how this course can add value to your solo journey",
      "Participate in live Q&A with the trainer",
      "Receive special discount offer for the full course"
    ],
    dateInfo: `Next cohort starts ${cohortStartDate}`,
    investmentInfo: "Just ₹99 to secure your spot"
  };
  
  // Step 2 content
  const step2 = journey?.step2 || {
    title: "Enroll in the Full Course",
    description: "After attending the Solo Accelerator Session, you'll have the opportunity to enroll in our comprehensive Level 1 course with a special discount—available exclusively to session participants.",
    linkText: "Learn more about the course",
    linkUrl: "#course",
    features: [
      "12-15 hours of in-depth Live lessons",
      "Comprehensive workbooks, spotlights, AI hacks & templates",
      "Free complementary access to premium tools",
      "Community support, lifetime access to course material",
      "Industry leading guest experts",
      "Optional 1-on-1 coaching"
    ],
    investmentInfo: "Special discount for session participants"
  };
  
  // Bottom card content
  const bottomCard = journey?.bottomCard || {
    title: "Our Commitment to Transparency",
    description: "We believe in being completely transparent about our offerings. The Solo Accelerator Session provides genuine value on its own, while also introducing you to our more comprehensive course. There's no obligation to purchase the course after attending the session.",
    buttonText: "Register for Session - Just ₹99",
    buttonUrl: "#webinar-dates"
  };

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-secondary-light/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-light/20 text-secondary-dark px-4 py-1 rounded-full mb-4 font-medium">
            YOUR JOURNEY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Journey Steps */}
          <div className="relative">
            {/* Connection line - visible on all screen sizes with responsive styling */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Mobile connection line */}
            <div className="md:hidden flex justify-center my-8">
              <div className="h-16 w-1 bg-gradient-to-b from-secondary to-primary"></div>
            </div>
            
            {/* Step 1: Accelerator Session */}
            <div className="relative z-10 mb-8 md:mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-right">
                  <div className="inline-block bg-secondary-light/20 text-secondary-dark px-4 py-1 rounded-full mb-4 font-medium">
                    STEP 1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step1.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {step1.description}
                  </p>
                  <div className="flex justify-center md:justify-end">
                    <a href={step1.linkUrl} className="text-secondary font-medium hover:text-secondary-dark transition flex items-center">
                      {step1.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="md:w-24 flex justify-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Video className="h-6 w-6 text-secondary mr-2" />
                      <span className="font-semibold text-gray-900">Solo Accelerator Session</span>
                    </div>
                    <ul className="space-y-2">
                      {step1.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-secondary-light/10 p-4 rounded-lg">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar className="h-5 w-5 text-secondary mr-2" />
                        <span className="text-gray-700 font-medium">{step1.dateInfo}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-white px-3 py-1 rounded-full text-secondary font-bold border border-secondary">
                          {step1.investmentInfo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2: Full Course */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 order-2 md:order-1">
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-6 w-6 text-primary mr-2" />
                      <span className="font-semibold text-gray-900">Complete Course</span>
                    </div>
                    <ul className="space-y-2">
                      {step2.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex justify-end bg-primary-light/10 p-4 rounded-lg">
                      <span className="bg-white px-3 py-1 rounded-full text-primary font-bold border border-primary">
                        {step2.investmentInfo}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-24 flex justify-center order-1 md:order-2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left order-3">
                  <div className="inline-block bg-primary-light/20 text-primary-dark px-4 py-1 rounded-full mb-4 font-medium">
                    STEP 2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step2.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {step2.description}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <a href={step2.linkUrl} className="text-primary font-medium hover:text-primary-dark transition flex items-center">
                      {step2.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Journey Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-secondary-light/10 p-3 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Time-Efficient</h4>
              <p className="text-gray-600">Start with just 90 minutes and decide if the full course is right for you</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-light/10 p-3 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Community Support</h4>
              <p className="text-gray-600">Join a community of like-minded solopreneurs on the same journey</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-tertiary-light/10 p-3 rounded-full inline-block mb-4">
                <CheckCircle className="h-8 w-8 text-tertiary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">Follow the path that has worked for 2,800+ successful solopreneurs</p>
            </div>
          </div>
          
          {/* Bottom Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-tertiary/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{bottomCard.title}</h3>
            <p className="text-gray-700 text-center mb-6">
              {bottomCard.description}
            </p>
            <div className="flex justify-center">
              <a 
                href={bottomCard.buttonUrl} 
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center"
              >
                {bottomCard.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;