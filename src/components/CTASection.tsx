import React from 'react';
import { ArrowRight, Clock, Calendar, Users, Tag, Gift, Shield, AlertCircle } from 'lucide-react';

const CTASection = () => {
  // Cohort start date
  const cohortStartDate = "June 15, 2025";
  
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Solo Journey?</h2>
          <p className="text-xl mb-8 text-primary-light/90">
            Join our 90-minute Solo Accelerator Session and discover the proven framework that has helped 2800+ solopreneurs build successful businesses.
          </p>
          
          <div className="bg-white text-gray-900 rounded-xl p-8 mb-10 shadow-xl transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Session Details</h3>
                <div className="space-y-2 text-left">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Multiple dates available</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">90 minutes per session</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Limited slots per session</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">₹99 <span className="text-lg line-through text-gray-500">₹999</span></div>
                <p className="text-sm text-gray-600 mb-4">Solo Accelerator Session fee</p>
                <a 
                  href="#webinar-dates"
                  className="bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition flex items-center justify-center shadow-lg transform hover:scale-105 duration-200"
                  aria-label="Reserve your spot for the Solo Accelerator Session"
                  data-tracking="cta-register-button"
                >
                  Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <div className="mt-3 flex items-center justify-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-1 text-tertiary" />
                  <span>100% Money-Back Guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex items-start">
                <Gift className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Exclusive Session Bonuses</h4>
                  <p className="text-gray-600 mb-3">All participants will receive:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                      <span className="text-gray-700">A special discount (upto 70%) on the full course</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                      <span className="text-gray-700">Priority access to future advanced modules, bootcamps, guest sessions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                      <span className="text-gray-700">Free Solo Business Starter Kit (₹1,997 value)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-highlight/10 p-4 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 text-highlight mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 text-left">
                <span className="font-bold">HURRY! Next cohort starts {cohortStartDate}.</span> The last 3 sessions sold out completely. Register now to guarantee your spot and access to the special course discount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;