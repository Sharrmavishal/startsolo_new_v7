import React, { useState } from 'react';
import { ArrowRight, BookOpen, Users, Award, Calendar, CheckCircle, Clock, Bookmark, Lightbulb, MessageSquare, Video, ChevronDown, ChevronUp } from 'lucide-react';
import { useContent } from './ContentProvider';

const CourseOverviewSection = () => {
  const { course, general } = useContent();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedWeekend, setExpandedWeekend] = useState(0); // Track which weekend is expanded in the accordion
  
  // Current cohort number from CMS or use fallback
  const currentCohort = general?.currentCohort || 12;
  
  // Cohort start date from CMS or use fallback
  const cohortStartDate = general?.cohortStartDate || "June 15, 2025";
  
  // Get content from CMS or use fallbacks
  const title = course?.title || "Start Solo Blueprint (Level 1): The Complete Course";
  const subtitle = course?.subtitle || "After the Solo Accelerator Session, take your solo business journey to the next level with our comprehensive Level 1 course delivered LIVE.";
  const tag = course?.tag || "THE FULL PROGRAM";
  
  // CTA button
  const ctaButton = course?.ctaButton || {
    text: "Start with the 90-Min Session - Just ₹99",
    url: "#webinar-dates"
  };
  
  // Cohort info
  const cohortInfo = course?.cohortInfo || {
    limitedSeatsText: "Limited seats per cohort",
    nextCohortText: `Next cohort starts ${cohortStartDate}`
  };

  // Course curriculum data
  const courseCurriculum = [
    {
      title: "Weekend 1: Find Your Niche & Stand Out",
      icon: <Bookmark className="h-6 w-6 text-primary" />,
      sessions: [
        {
          title: "LIVE: Set SMART Goals for Your Solo Business",
          description: "Define clear, measurable goals that will guide your solo business journey"
        },
        {
          title: "LIVE: Deep Dive into Audience Profiling",
          description: "Create detailed profiles of your ideal clients to better understand their needs"
        },
        {
          title: "LIVE: Nail Your Niche – Market Trends, Competition & USP",
          description: "Identify your unique selling proposition and position yourself in the market"
        },
        {
          title: "Spotlight Activity: Group Sharing – Craft & Present Your USP",
          description: "Get real-time feedback on your unique selling proposition"
        },
        {
          title: "LIVE Q&A: Get Clarity on Finding Your Niche",
          description: "Address your specific questions about finding and validating your niche"
        }
      ]
    },
    {
      title: "Weekend 2: Build Your Brand Identity",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      sessions: [
        {
          title: "LIVE: Crafting Your Brand Positioning & Message",
          description: "Develop a compelling brand story that resonates with your target audience"
        },
        {
          title: "LIVE: Visual Identity 101 – Website, Logo & Social Media",
          description: "Create a cohesive visual identity across all your business touchpoints"
        },
        {
          title: "LIVE: Content Planning & Marketing Foundations",
          description: "Build a strategic content plan that attracts and engages your ideal clients"
        },
        {
          title: "Spotlight Activity: Group Brand Identity Workshop",
          description: "Present your brand drafts and receive constructive feedback"
        },
        {
          title: "LIVE Q&A: Fine-Tune Your Brand Strategy",
          description: "Get expert answers to your branding questions"
        }
      ]
    },
    {
      title: "Weekend 3: Get Clients & Grow Your Audience",
      icon: <Users className="h-6 w-6 text-primary" />,
      sessions: [
        {
          title: "LIVE: Client Attraction Strategies",
          description: "Learn where and how to find your first clients without cold pitching"
        },
        {
          title: "LIVE: Instagram & WhatsApp Growth Hacks for Solopreneurs",
          description: "Master social media strategies specifically designed for solo businesses"
        },
        {
          title: "LIVE: Building a Simple Sales Funnel That Works",
          description: "Create an automated system to attract and convert prospects into clients"
        },
        {
          title: "Spotlight Activity: Real-Time Strategy Sessions",
          description: "Map out your first client outreach plan with expert guidance"
        },
        {
          title: "LIVE Q&A: Overcoming Common Client Acquisition Challenges",
          description: "Get solutions to the most common obstacles in finding clients"
        }
      ]
    },
    {
      title: "Weekend 4: Launch with Confidence",
      icon: <Video className="h-6 w-6 text-primary" />,
      sessions: [
        {
          title: "LIVE: Create Your One-Pager Launch Plan",
          description: "Develop a concise, actionable plan to launch your solo business"
        },
        {
          title: "LIVE: The Art of Pitching – Positioning Yourself as an Expert",
          description: "Master the skill of presenting your services with confidence"
        },
        {
          title: "LIVE: Overcoming Fear & Staying Consistent Post-Launch",
          description: "Build resilience and develop habits for long-term success"
        },
        {
          title: "Spotlight Activity: 🚀 Pitch Fest",
          description: "Present your one-pager launch plan and receive immediate feedback"
        },
        {
          title: "Final Q&A & Next Steps",
          description: "Get personalized guidance to kickstart your solo journey"
        }
      ]
    }
  ];

  // Toggle weekend expansion in accordion
  const toggleWeekend = (index) => {
    if (expandedWeekend === index) {
      setExpandedWeekend(null); // Collapse if already expanded
    } else {
      setExpandedWeekend(index); // Expand the clicked weekend
    }
  };

  return (
    <section id="course" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-light/20 text-primary-dark px-4 py-1 rounded-full mb-4 font-medium">
            {tag}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            {/* Tabbed Navigation */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
              <button 
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'curriculum' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => setActiveTab('curriculum')}
              >
                Curriculum
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'benefits' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => setActiveTab('benefits')}
              >
                What You'll Gain
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'valueadds' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => setActiveTab('valueadds')}
              >
                Value Adds
              </button>
            </div>
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Structure</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-6 w-6 text-primary mr-3" />
                        <div>
                          <div className="font-bold text-gray-900">4 Weekends</div>
                          <div className="text-gray-600">Each weekend - 2 live sessions</div>
                        </div>
                      </div>
                      <div className="space-y-3 text-gray-700">
                        <p>• 2.5 to 3 hours per session</p>
                        <p>• 90 mins – Live Training + Exercises</p>
                        <p>• 30 mins – Spotlight Activity / Group Discussions</p>
                        <p>• 30-45 mins – Live Q&A / Coaching</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary-light/10 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <Users className="h-6 w-6 text-primary mr-3" />
                        <div className="font-bold text-gray-900">Cohort Details</div>
                      </div>
                      <div className="space-y-3 text-gray-700">
                        <p className="flex items-center">
                          <span className="h-2 w-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          <span>{cohortInfo.limitedSeatsText}</span>
                        </p>
                        <p className="flex items-center">
                          <span className="h-2 w-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          <span>{cohortInfo.nextCohortText}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Offer</h3>
                    <div className="bg-tertiary/10 p-6 rounded-lg mb-6">
                      <div className="bg-tertiary/20 text-tertiary-dark px-3 py-1 rounded-full text-sm font-medium inline-flex items-center mb-4">
                        <Award className="h-4 w-4 mr-1" /> Exclusive Discount
                      </div>
                      <p className="text-gray-700 mb-4">
                        Solo Accelerator Session attendees receive a <span className="font-bold">Mega bonus discount</span> on the full course.
                      </p>
                      <p className="text-gray-700">
                        Join the 90-minute session first to experience our teaching style and get access to special pricing for the complete program.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3">Who This Course Is For</h4>
                      <ul className="space-y-2">
                        {[
                          "Professionals looking beyond the 9-5 grind",
                          "Side-hustlers ready to go full-time",
                          "Freelancers & creators aiming for a sustainable business",
                          "Experts ready to monetize their skills",
                          "People seeking location and time freedom"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-tertiary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Curriculum Tab - Accordion Style */}
            {activeTab === 'curriculum' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                
                <div className="space-y-4">
                  {courseCurriculum.map((weekend, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      {/* Accordion Header */}
                      <button 
                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition text-left"
                        onClick={() => toggleWeekend(index)}
                      >
                        <div className="flex items-center">
                          <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex items-center">
                            {weekend.icon}
                            <h4 className="font-bold text-gray-900 ml-2">{weekend.title}</h4>
                          </div>
                        </div>
                        {expandedWeekend === index ? (
                          <ChevronUp className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary" />
                        )}
                      </button>
                      
                      {/* Accordion Content */}
                      {expandedWeekend === index && (
                        <div className="p-5 bg-white border-t border-gray-200">
                          <div className="space-y-4">
                            {weekend.sessions.map((session, sessionIndex) => (
                              <div key={sessionIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                                <h5 className="font-semibold text-gray-900 mb-1">{session.title}</h5>
                                <p className="text-gray-600 text-sm">{session.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-primary-light/10 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    <h4 className="font-bold text-gray-900">Time Commitment</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The course is designed to be intensive yet manageable for busy professionals. Each weekend requires approximately 5-6 hours of your time, spread across two days.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm">
                      <span className="font-bold text-primary">8</span> Live Sessions
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm">
                      <span className="font-bold text-primary">4</span> Spotlight Activities
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm">
                      <span className="font-bold text-primary">4</span> Q&A Sessions
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm">
                      <span className="font-bold text-primary">20-24</span> Total Hours
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* What You'll Gain Tab */}
            {activeTab === 'benefits' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Gain</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Clarity on Your Niche & USP</h4>
                      <p className="text-gray-700">Identify your strengths, market demand, and how to stand out.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">A Strong Brand Identity</h4>
                      <p className="text-gray-700">Develop your brand positioning, messaging, and visual identity.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">An Actionable Content & Marketing Plan</h4>
                      <p className="text-gray-700">Learn how to create engaging content and attract your ideal clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Client Acquisition Strategies</h4>
                      <p className="text-gray-700">Master WhatsApp & Instagram growth hacks to land your first clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">A Solid Launch Blueprint</h4>
                      <p className="text-gray-700">Walk away with a clear, step-by-step plan to start your solo business.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Confidence & Support</h4>
                      <p className="text-gray-700">Overcome self-doubt with expert guidance, live practice, and a like-minded community.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Real-Time Feedback & Q&A</h4>
                      <p className="text-gray-700">Get personalized insights during live sessions to refine your strategy.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    What Our Students Say
                  </h4>
                  <div className="italic text-gray-700 border-l-4 border-primary-light/50 pl-4 py-2">
                    "The course gave me the clarity and confidence I needed to finally launch my consulting business. The step-by-step approach eliminated all the guesswork, and I landed my first client within two weeks of completing the program!"
                    <div className="mt-2 text-sm font-medium text-gray-900 not-italic">— Ananya D., Brand Consultant</div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Value Adds Tab */}
            {activeTab === 'valueadds' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Value Adds</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all duration-200">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Premium Tools Access</h4>
                    <p className="text-gray-700">Complementary access to several premium tools that simplify your workflow</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all duration-200">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Downloadable Resources</h4>
                    <p className="text-gray-700">Spotlight activities, AI hacks, workbooks & templates to accelerate your progress</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all duration-200">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Community Access</h4>
                    <p className="text-gray-700">Private community access with guest speaker interactions and peer support</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all duration-200">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Weekly Q&A Sessions</h4>
                    <p className="text-gray-700">Get your questions answered and receive personalized guidance</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all duration-200">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Lifetime Access</h4>
                    <p className="text-gray-700">Revisit recorded course materials anytime to refresh your knowledge</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all duration-200">
                    <CheckCircle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Premium Options</h4>
                    <p className="text-gray-700">Optional 1-on-1 coaching and city-specific boot camps available</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-tertiary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 text-tertiary mr-2" />
                    Completion Certificate
                  </h4>
                  <p className="text-gray-700">
                    Upon successful completion of the course, you'll receive an official Start Solo Blueprint certificate that you can showcase on your LinkedIn profile and website to boost your credibility as a solopreneur.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Unified CTA Section */}
          <div className="mt-12 bg-primary-light/10 p-8 rounded-xl border border-primary-light/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Start Your Solo Journey?</h3>
                <p className="text-gray-700">Begin with our 90-minute Solo Accelerator Session and discover if the full course is right for you.</p>
              </div>
              <a 
                href={ctaButton.url} 
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition flex items-center whitespace-nowrap flex-shrink-0"
              >
                {ctaButton.text} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;