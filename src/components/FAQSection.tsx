import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  // Current cohort number
  const currentCohort = 12;
  
  // Next cohort number
  const nextCohort = currentCohort + 1;
  
  // Cohort start date
  const cohortStartDate = "June 15, 2025";
  
  // Next cohort start date (approximately 1 month later)
  const nextCohortStartDate = "July 15, 2025";
  
  const faqs = [
    {
      question: "What's the difference between the Solo Accelerator Session and the Start Solo Blueprint course?",
      answer: `The Solo Accelerator Session is a 90-minute live session where you'll learn key strategies from our framework and get a taste of what's possible. The t course is a comprehensive program with Live sessions lessons, workbooks, templates, and ongoing support to implement the complete Start Solo Blueprint. The next cohort starts on ${cohortStartDate}.`
    },
    {
      question: "Why is the Solo Accelerator Session only ₹99?",
      answer: "We charge a small fee to ensure that only serious solopreneurs attend. This helps us maintain a high-quality experience and ensures that attendees are committed to implementing what they learn."
    },
    {
      question: `When does the next cohort start and how long does it run?`,
      answer: `The next cohort starts on ${cohortStartDate}. The Solo Accelerator Session is 90 minutes, and if you choose to continue with the full course, it runs for 5 weeks with weekly LIVE modules and Q&A sessions.`
    },
    {
      question: "How much does the full course cost?",
      answer: `The full Start Solo Blueprint (Level 1) course fee is dynamic and depends on the inclusions you choose, such as bootcamps, 1-on-1 coaching, bonus modules, and guest sessions. Session participants receive a special discount that can reach up to 70% at times.` },
    {
      question: "What is the Start Solo WhatsApp Hub and how do I join?",
      answer: `The Start Solo Hub is our free WhatsApp community where you can connect with other solopreneurs, access exclusive resources, and get notified about upcoming cohorts and expert speaker sessions. You can join by clicking the 'Join Hub' button in the navigation or by scrolling to the WhatsApp Hub section. All session attendees and course students are automatically invited to join as well.`
    },
    {
      question: "Will the Solo Accelerator Session be recorded?",
      answer: `Yes, all registrants will receive a replay of the session that will be available few hours after the live event. However, we strongly recommend attending live for the best experience and to participate in the Q&A session.`
    },
    {
      question: "What happens after I complete the course?",
      answer: `After completing the course, you'll have lifetime access to the course materials and can revisit them anytime. You'll receive a course completion certificate and exclusive discounts to future courses, bootcamps, and guest speaker sessions. You'll also remain part of our alumni community where you can continue to network and learn from fellow solopreneurs.`
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our cohorts, course, and community.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Still have questions about the upcoming sessions?</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:hello@startsolo.in" 
              className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary-light/10 transition"
            >
              Contact Us
            </a>
            <a href="#whatsapp-hub" className="bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-[#128C7E] transition flex items-center justify-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask in WhatsApp Hub
            </a>
            <a href="#webinar-dates" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center justify-center">
              Register for Session <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;