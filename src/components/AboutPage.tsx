import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <a 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to home
          </a>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-12">
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Start Solo Blueprint</h1>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Start Solo Blueprint was founded with a simple mission: to help aspiring entrepreneurs build profitable solo businesses without the burnout that often comes with it.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  After spending years in the corporate world, our founder Diksha Sethi realized that there was a better way to work—one that provided both financial freedom and the flexibility to live life on your own terms.
                </p>
                <p className="text-gray-700 mb-4">
                  But the journey wasn't easy. Like many entrepreneurs, she made countless mistakes, wasted time and money on strategies that didn't work, and nearly gave up multiple times.
                </p>
                <p className="text-gray-700 mb-6">
                  Through persistence and a systematic approach to building her business, she eventually developed the Start Solo Blueprint—a framework that has now helped over 2,800 solopreneurs build sustainable businesses.
                </p>
                
                <div className="bg-primary-light/10 p-6 rounded-lg border border-primary-light/20 my-8">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700">
                    To empower 100,000 professionals to build profitable solo businesses that provide both financial freedom and work-life balance by 2030.
                  </p>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Approach</h2>
                <p className="text-gray-700 mb-4">
                  We believe that building a solo business shouldn't be complicated. Our approach focuses on:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Simplicity:</strong> Cutting through the noise to focus on what actually works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Sustainability:</strong> Building systems that allow you to grow without burning out</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Community:</strong> Providing support so you never have to feel alone on your journey</span>
                  </li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">Transparency</h3>
                    <p className="text-gray-700 text-sm">We're honest about what works and what doesn't</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">Practicality</h3>
                    <p className="text-gray-700 text-sm">We focus on actionable strategies, not theory</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">Integrity</h3>
                    <p className="text-gray-700 text-sm">We only recommend what we truly believe in</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">Empowerment</h3>
                    <p className="text-gray-700 text-sm">We give you the tools to succeed on your own terms</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                      alt="Diksha Sethi" 
                      className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Diksha Sethi</h3>
                    <p className="text-primary font-medium mb-2">Founder & Lead Trainer</p>
                    <p className="text-gray-600 text-sm text-center">
                      Communications specialist with 18+ years of experience leading brands like Mastercard, Ford, and Qualcomm.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                      alt="Rahul Mehta" 
                      className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Rahul Mehta</h3>
                    <p className="text-primary font-medium mb-2">Co-Founder & Business Strategist</p>
                    <p className="text-gray-600 text-sm text-center">
                      Former management consultant with expertise in scaling businesses and operational efficiency.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Join Our Journey</h2>
                <p className="text-gray-700 mb-6">
                  We're on a mission to redefine what success looks like for solo entrepreneurs. Whether you're just starting out or looking to scale your existing business, we'd love to have you join our community.
                </p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                  <a 
                    href="/#webinar-dates" 
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center justify-center"
                  >
                    Join Our Next Session
                  </a>
                  <a 
                    href="/#whatsapp-hub" 
                    className="bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-[#128C7E] transition flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join WhatsApp Hub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Office Address</h3>
                        <p className="text-gray-700">
                          123 Business Park, Sector 44<br />
                          Gurugram, Haryana 122003<br />
                          India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                        <a href="mailto:hello@startsolo.in" className="text-primary hover:text-primary-dark transition">
                          hello@startsolo.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-700">+91 98765 43210</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Map will be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;