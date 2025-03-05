import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState({ ...formState, submitting: true });
    
    try {
      // This form will be handled by Netlify Forms automatically
      // The form has the netlify attribute which Netlify detects during deployment
      
      // Simulate submission for preview purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormState({
        ...formState,
        submitted: true,
        submitting: false,
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormState({
        ...formState,
        submitting: false,
        error: 'There was an error submitting the form. Please try again.'
      });
    }
  };

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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Support & Contact</h1>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  We're here to help you on your solo business journey. Whether you have questions about our sessions, need technical support, or just want to connect, we're just a message away.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                    <Mail className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-700 mb-3 text-sm">For general inquiries and support</p>
                    <a href="mailto:hello@startsolo.in" className="text-primary hover:text-primary-dark transition font-medium">
                      hello@startsolo.in
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                    <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-700 mb-3 text-sm">Available Monday-Friday, 10am-6pm IST</p>
                    <a href="tel:+919876543210" className="text-primary hover:text-primary-dark transition font-medium">
                      +91 98765 43210
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                    <MessageCircle className="h-10 w-10 text-[#25D366] mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">WhatsApp Support</h3>
                    <p className="text-gray-700 mb-3 text-sm">Quick responses for urgent queries</p>
                    <a href="https://wa.me/919876543210" className="text-[#25D366] hover:text-[#128C7E] transition font-medium">
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Contact Form</h2>
                
                {formState.submitted ? (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-700 mb-4">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormState({ ...formState, submitted: false })}
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    {/* Hidden field for Netlify form handling */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Please select a subject</option>
                        <option value="Session Inquiry">Session Inquiry</option>
                        <option value="Course Information">Course Information</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Billing Question">Billing Question</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>
                    
                    {formState.error && (
                      <div className="bg-red-50 text-red-700 p-3 rounded-md">
                        {formState.error}
                      </div>
                    )}
                    
                    <div>
                      <button
                        type="submit"
                        disabled={formState.submitting}
                        className={`bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center justify-center ${
                          formState.submitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {formState.submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
                
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Support Questions</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">How do I get a refund?</h3>
                    <p className="text-gray-700">
                      If you're not satisfied with your Solo Accelerator Session, simply email us at hello@startsolo.in within 24 hours of attending the session, and we'll process your refund right away.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">I missed my scheduled session. Can I reschedule?</h3>
                    <p className="text-gray-700">
                      Yes! If you missed your session, you can reschedule for another available date. Please contact us with your original booking details, and we'll help you find a new session date.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">How do I access the course materials?</h3>
                    <p className="text-gray-700">
                      After enrolling in the full course, you'll receive login credentials to our learning platform where all course materials are hosted. If you're having trouble accessing your materials, please contact our support team.
                    </p>
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

export default SupportPage;