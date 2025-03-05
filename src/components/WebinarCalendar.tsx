import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, ArrowRight, Check, MessageCircle, AlertCircle, Shield } from 'lucide-react';
import { useContent } from './ContentProvider';

interface WebinarDate {
  id: string;
  date: string;
  day: string;
  time: string;
  timeZone: string;
  spotsLeft: number;
  paymentLink: string;
  fillingFast: boolean;
}

const WebinarCalendar = () => {
  const { webinarDates, general } = useContent();
  
  // Get dates from CMS or use fallback
  const availableDates: WebinarDate[] = webinarDates?.dates || [
    {
      id: 'june-15',
      date: 'June 15, 2025',
      day: 'Sunday',
      time: '2:00 PM',
      timeZone: 'IST',
      spotsLeft: 7,
      paymentLink: 'https://checkout.example.com/webinar-june-15',
      fillingFast: true
    },
    {
      id: 'june-18',
      date: 'June 18, 2025',
      day: 'Wednesday',
      time: '7:00 PM',
      timeZone: 'IST',
      spotsLeft: 13,
      paymentLink: 'https://checkout.example.com/webinar-june-18',
      fillingFast: false
    },
    {
      id: 'june-20',
      date: 'June 20, 2025',
      day: 'Friday',
      time: '12:00 PM',
      timeZone: 'IST',
      spotsLeft: 15,
      paymentLink: 'https://checkout.example.com/webinar-june-20',
      fillingFast: false
    }
  ];

  // Initialize state with the first date selected
  const [selectedDateId, setSelectedDateId] = useState(availableDates.length > 0 ? availableDates[0].id : '');
  
  // Simulate dynamic data that would come from a backend
  const dynamicDates = availableDates.map(date => {
    // In a real app, this would be fetched from the backend
    // Here we're just simulating the data
    return {
      ...date,
      // Keep the original values from CMS
      spotsLeft: date.spotsLeft,
      fillingFast: date.fillingFast
    };
  });
  
  const selectedDate = dynamicDates.find(date => date.id === selectedDateId);
  
  // Get cohort start date from CMS or use fallback
  const cohortStartDate = general?.cohortStartDate || "June 15, 2025";
  
  // Get registration fee and original price from CMS or use fallback
  const registrationFee = webinarDates?.registrationFee || "₹99";
  const originalPrice = webinarDates?.originalPrice || "₹999";
  
  // Get urgency message from CMS or use fallback
  const urgencyMessage = webinarDates?.urgencyMessage || 
    `HURRY! Next cohort starts ${cohortStartDate}. These sessions typically fill up 7-10 days before the start date.`;

  return (
    <section id="webinar-dates" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-light/20 text-primary-dark px-4 py-1 rounded-full mb-4 font-medium">
            RESERVE YOUR SPOT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {webinarDates?.title || "Choose Your Session Date"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {webinarDates?.subtitle || "Select a date and time that works best for your schedule"}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Available Session Dates</h3>
                  
                  {dynamicDates.length > 0 ? (
                    dynamicDates.map((date) => (
                      <div 
                        key={date.id}
                        className={`border rounded-lg p-4 cursor-pointer transition ${
                          selectedDateId === date.id 
                            ? 'border-primary bg-primary-light/10' 
                            : 'border-gray-200 hover:border-primary-light hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedDateId(date.id)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-900">{date.day}, {date.date}</div>
                            <div className="text-gray-600 flex items-center mt-1">
                              <Clock className="h-4 w-4 mr-1" />
                              {date.time} {date.timeZone}
                            </div>
                          </div>
                          <div className="flex items-center">
                            {selectedDateId === date.id && (
                              <div className="bg-primary text-white rounded-full p-1 mr-2">
                                <Check className="h-4 w-4" />
                              </div>
                            )}
                            <div className="text-sm flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              <span className={date.spotsLeft < 10 ? "text-highlight font-bold" : "text-gray-500"}>
                                {date.spotsLeft} spots left
                              </span>
                              {date.fillingFast && (
                                <span className="ml-2 bg-highlight/10 text-highlight text-xs px-2 py-0.5 rounded-full animate-pulse">
                                  Filling fast!
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <p className="text-gray-600">No upcoming sessions available at the moment.</p>
                      <p className="mt-2 text-gray-600">Please check back soon or join our WhatsApp Hub for updates.</p>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Selected Session</h3>
                  
                  {selectedDate ? (
                    <div>
                      <div className="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                        <div className="flex items-center mb-4">
                          <Calendar className="h-10 w-10 text-primary mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{selectedDate.date}</div>
                            <div className="text-gray-600">{selectedDate.day}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-primary mr-2" />
                            <span className="text-gray-700">{selectedDate.time} {selectedDate.timeZone}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-primary mr-2" />
                            <span className="text-gray-700">Limited seats available ({selectedDate.spotsLeft} spots left)</span>
                          </div>
                        </div>
                        
                        <div className="bg-primary-light/10 p-3 rounded-lg text-sm text-gray-700">
                          <p>The session will last approximately 90 minutes, including Q&A time.</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-2">{registrationFee} <span className="text-lg line-through text-gray-500">{originalPrice}</span></div>
                        <p className="text-sm text-gray-600 mb-4">One-time registration fee</p>
                        
                        <a 
                          href={selectedDate.paymentLink}
                          className="block w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center justify-center shadow-lg transform hover:scale-105 duration-200"
                          aria-label="Secure your spot for the Solo Accelerator Session"
                          data-tracking="webinar-registration-button"
                        >
                          Reserve Your Spot Now <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        
                        <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                          <Shield className="h-4 w-4 mr-1 text-tertiary" />
                          <span>100% Money-Back Guarantee</span>
                        </div>
                        
                        <div className="mt-4 bg-highlight/10 p-3 rounded-lg flex items-start">
                          <AlertCircle className="h-5 w-5 text-highlight mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700 text-left">
                            <span className="font-bold">{urgencyMessage}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6">
                      <p className="text-gray-600">Please select a session date from the options on the left.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-secondary-light/10 rounded-lg p-6 border border-secondary-light/20">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/4 mb-4 md:mb-0 text-center md:text-left">
                <Calendar className="h-12 w-12 text-secondary mx-auto md:mx-0" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {webinarDates?.cantMakeIt?.title || "Can't Make These Dates?"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {webinarDates?.cantMakeIt?.description || 
                    "Join our WhatsApp Hub to receive notifications about new session dates. You'll also gain access to free resources, exclusives from guest speakers and community support."}
                </p>
                <button 
                  className="bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#128C7E] transition flex items-center mx-auto md:mx-0"
                  aria-label="Join the WhatsApp Hub for notifications about new session dates"
                  data-tracking="whatsapp-hub-button"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {webinarDates?.cantMakeIt?.buttonText || "Join WhatsApp Hub"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCalendar;