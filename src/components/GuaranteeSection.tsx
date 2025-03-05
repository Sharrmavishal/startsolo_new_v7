import React from 'react';
import { Shield, Check } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary text-white p-8 flex flex-col items-center justify-center">
              <Shield className="h-20 w-20 mb-4" />
              <h3 className="text-2xl font-bold text-center">Our Value Guarantee</h3>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">If you don't get value, we'll refund your ₹99</h4>
              <p className="text-gray-700 mb-6">
                We're so confident you'll get immense value from the Solo Accelerator Session that we offer a simple guarantee: 
                If you attend the full session and don't feel it was worth your time, we'll refund your ₹99 registration fee 
                and give you access to our "Solo Business Starter Kit" (₹1,997 value) for free as an apology for wasting your time.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium text-gray-900">No risk to you</span> — attend the session and decide for yourself
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium text-gray-900">Actionable strategies</span> — you'll leave with at least 3 tactics you can implement immediately
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium text-gray-900">Real-world examples</span> — not theory, but proven strategies from successful entrepreneurs
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a href="#webinar-dates" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center">
                  Register Risk-Free <Shield className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;