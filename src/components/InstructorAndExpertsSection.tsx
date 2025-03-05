import React from 'react';
import { Award, BookOpen, Users, Briefcase, CheckCircle, ArrowRight, Mic, ExternalLink, Calendar } from 'lucide-react';

const InstructorAndExpertsSection = () => {
  // Cohort start date
  const cohortStartDate = "June 15, 2025";
  
  const speakers = [
    {
      name: "Priya Sharma",
      role: "Marketing Strategist & Founder",
      company: "Digital Growth Academy",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      topic: "Client Acquisition Strategies for Solo Entrepreneurs",
      credentials: ["Former CMO at TechVision", "Author of 'Digital Marketing Mastery'", "15+ years in digital marketing"],
      date: "July 10, 2025"
    },
    {
      name: "Arjun Mehta",
      role: "Systems & Automation Expert",
      company: "Workflow Mastery",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      topic: "Scaling Your Business with Automation",
      credentials: ["Built 3 7-figure businesses", "Featured in Economic Times", "Helped 200+ businesses automate"],
      date: "July 24, 2025"
    },
    {
      name: "Neha Kapoor",
      role: "Financial Strategist",
      company: "Solo Business CFO",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      topic: "Financial Freedom Through Smart Business Planning",
      credentials: ["Certified Financial Planner", "Former Investment Banker", "Specializes in solo business finances"],
      date: "August 7, 2025"
    }
  ];

  return (
    <section id="instructor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-light/20 text-primary-dark px-4 py-1 rounded-full mb-4 font-medium">
            LEARN FROM THE BEST
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Trainer & Expert Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders, innovators, and challengers who bring real-world expertise to help you launch, grow, and thrive as a solopreneur.
          </p>
        </div>
        
        {/* Main Instructor Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Diksha Sethi - Communications Specialist" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-10">
                <div className="inline-block bg-primary-light/20 text-primary-dark px-3 py-1 rounded-full mb-3 text-sm font-medium">
                  YOUR LEAD TRAINER
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Diksha Sethi</h3>
                <p className="text-primary font-medium mb-4">Founder, Start Solo</p>
                
                <p className="text-gray-700 mb-6">
                  Meet Diksha Sethi—Communications Specialist, brand whisperer, and solopreneur champion. With 18 years of experience leading brands like Mastercard, Ford, IndiGo, SpiceJet, and Qualcomm, she's navigated boardrooms, crisis war rooms, and major brand launches.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Corporate life, however, couldn't contain her curiosity. She built <strong>Different Strokes</strong>, an award-winning podcast, became a certified corporate trainer coaching 2,800+ professionals, and deepened her expertise as an NLP and Gestalt practitioner, counseling therapist, and mental health advocate.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Now, as Co-founder of <strong>Start Solo</strong>, she's on a mission to help solopreneurs <strong>learn, launch, and grow—minus the fluff, plus all the fun.</strong> If you're ready to bet on yourself, Diksha's got your back.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">18+ years of proven agency leadership expertise</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Empowered 2,800+ solopreneurs</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">20,000+ hours of impactful training</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700">Award-winning podcaster & NLP practitioner</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                  <p className="italic text-gray-700 mb-3">
                    "I believe in our motto 'Start Solo—but not alone.' My mission is to help people look beyond the 9-to-5 and explore their passion leading to financial freedom. Start Solo is that community that incubates, mentors, and supports solopreneurs all through the way."
                  </p>
                  <p className="font-medium text-gray-900">— Diksha Sethi</p>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="#webinar-dates" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition">
                    Register for Session <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="#course" className="inline-flex items-center border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary-light/10 transition">
                    View Course Curriculum <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expert Speakers Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Plus Expert Guest Speakers</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Our course and community feature exclusive sessions with these successful entrepreneurs and specialists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-accent font-medium mb-4">{speaker.role}, {speaker.company}</p>
                
                <div className="bg-accent-light/10 p-4 rounded-lg mb-4">
                  <div className="flex items-start">
                    <Mic className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Speaking On:</h4>
                      <p className="text-gray-700">{speaker.topic}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Credentials:</h4>
                  <ul className="space-y-1">
                    {speaker.credentials.map((credential, i) => (
                      <li key={i} className="flex items-start">
                        <Award className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{speaker.date}</span>
                  </div>
                  <a 
                    href="#" 
                    className="text-accent font-medium text-sm flex items-center hover:text-accent-dark transition"
                  >
                    Learn more <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 text-center">
              <div className="bg-accent-light/20 rounded-full p-4 inline-block">
                <Mic className="h-10 w-10 text-accent" />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Access All Expert Sessions</h3>
              <p className="text-gray-700 mb-4">
                Your Start Solo Blueprint course (Level 1) comes with these amazing expert sessions! Plus, as a valued member of our community, you'll get invites to special bonus sessions throughout the year when you join our Solo Accelerator Sessions or our WhatsApp Hub.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <a href="#webinar-dates" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition flex items-center justify-center">
                  Register for Session <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#whatsapp-hub" className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary-light/10 transition">
                  Join WhatsApp Hub - Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorAndExpertsSection;