import React from 'react';
import { Award, BookOpen, Users, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const AboutTrainerSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-light/20 text-primary-dark px-4 py-1 rounded-full mb-4 font-medium">
            YOUR EXPERT INSTRUCTOR
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from someone who has been where you are and built a successful solo business from scratch.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="John Smith - Business Coach" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">John Smith</h3>
                <p className="text-primary font-medium mb-4">Founder, Start Solo Blueprint</p>
                
                <p className="text-gray-700 mb-6">
                  After spending 10 years in the corporate world, I left my six-figure job to start my own business. 
                  The first year was a struggle—I made every mistake in the book and nearly gave up. 
                  But after developing the Start Solo Blueprint framework, I was able to build a thriving business 
                  that now generates over $500,000 annually while working just 25 hours per week.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">7+ years as a solo entrepreneur</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Helped 500+ entrepreneurs</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Author of "Solo Success"</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Featured in Forbes & Inc.</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                  <p className="italic text-gray-700 mb-3">
                    "I'm not here to sell you on get-rich-quick schemes. My mission is to show you the exact, 
                    proven system I've used to build a sustainable business that gives me both financial freedom 
                    and time with my family. If I can do it, so can you."
                  </p>
                  <p className="font-medium text-gray-900">— John Smith</p>
                </div>
                
                <a href="#webinar-dates" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition">
                  Learn from John - Join the Webinar <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainerSection;