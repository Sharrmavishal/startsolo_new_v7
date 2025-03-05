import React, { useState } from 'react';
import { Star, Quote, CheckCircle, ArrowRight, Clock } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('featured');
  
  // Featured testimonials with detailed success stories
  const featuredTestimonials = [
    {
      name: "Ananya Desai",
      role: "UX Designer & Brand Consultant",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      quote: "The strategies I learned from the Solo Accelerator Session helped me double my client base in just 60 days. The framework is so clear and actionable - it's exactly what I needed!",
      stars: 5,
      videoId: null // Optional YouTube video ID
    },
    {
      name: "Rahul Sharma",
      role: "Digital Marketing Consultant",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      quote: "I was skeptical about a ₹99 session, but the value I received was incredible. I implemented just one strategy and landed a ₹75,000 client within a week!",
      stars: 5,
      videoId: null
    },
    {
      name: "Priya Patel",
      role: "Wellness Coach & Nutritionist",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      quote: "This session gave me the clarity and confidence I needed to finally launch my coaching business. The step-by-step approach eliminated all the guesswork.",
      stars: 5,
      videoId: null
    }
  ];
  
  // Quick quotes for the quote carousel
  const quickQuotes = [
    {
      name: "Vikram Singh",
      role: "Freelance Developer",
      quote: "The Solo Blueprint framework helped me transition from hourly billing to value-based pricing. My income increased by 70% in just 2 months.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Ananya Desai",
      role: "Content Strategist",
      quote: "I went from constantly chasing clients to having a waitlist. The positioning strategy was a game-changer for my business.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Karthik Menon",
      role: "Financial Advisor",
      quote: "The client acquisition system alone was worth 100x the investment. I've never had so many qualified leads coming in consistently.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Meera Joshi",
      role: "Interior Designer",
      quote: "I was working 70+ hours a week and burning out. Now I work 30 hours and make more money. The systems and processes changed everything.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Arjun Nair",
      role: "Fitness Coach",
      quote: "The blueprint helped me scale from 1-on-1 coaching to a group program that serves 5x more clients with less of my time.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent-light/20 text-accent-dark px-4 py-1 rounded-full mb-4 font-medium">
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results from Real Solopreneurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover success stories from real professionals and entrepreneurs who have transformed their businesses through our workshops and trainings
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'featured' ? 'bg-white shadow-sm text-primary' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('featured')}
            >
              Featured Stories
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'quotes' ? 'bg-white shadow-sm text-primary' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('quotes')}
            >
              Success Quotes
            </button>
          </div>
        </div>
        
        {/* Featured testimonials */}
        {activeTab === 'featured' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative transition-all duration-300 hover:shadow-xl">
                <Quote className="absolute top-4 right-4 h-10 w-10 text-primary-light/20" />
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-primary-light/30"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-primary-dark">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-accent mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                
                {testimonial.videoId && (
                  <div className="mb-4">
                    <a 
                      href={`https://www.youtube.com/watch?v=${testimonial.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium flex items-center hover:text-primary-dark transition"
                    >
                      Watch video testimonial
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Quote carousel */}
        {activeTab === 'quotes' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quickQuotes.map((quote, index) => (
                    <div key={index} className="flex p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <img 
                        src={quote.image} 
                        alt={quote.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-700 text-sm italic mb-2">"{quote.quote}"</p>
                        <p className="text-sm font-bold text-gray-900">{quote.name}</p>
                        <p className="text-xs text-gray-600">{quote.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-700 mb-4">These are just a few of the 2800+ solopreneurs who have transformed their businesses with our blueprint.</p>
                  <a href="#webinar-dates" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition">
                    Join Them - Register Now <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;