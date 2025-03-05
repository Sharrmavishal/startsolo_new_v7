import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import HeroSection from './components/HeroSection';
import FeaturedInSection from './components/FeaturedInSection';
import InstructorAndExpertsSection from './components/InstructorAndExpertsSection';
import CourseOverviewSection from './components/CourseOverviewSection';
import WebinarInfoSection from './components/WebinarInfoSection';
import WebinarCalendar from './components/WebinarCalendar';
import JourneySection from './components/JourneySection';
import TestimonialsSection from './components/TestimonialsSection';
import WhatsAppHubSection from './components/WhatsAppHubSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Header from './components/Header';
import { useContent } from './components/ContentProvider';
import SEOHead from './components/SEOHead';
import DynamicPages from './components/DynamicPages';
import StickyWhatsAppCTA from './components/StickyWhatsAppCTA';

function App() {
  const { general } = useContent();
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      
      {/* Only show the main content on the homepage */}
      {isHomePage ? (
        <>
          {general.countdown.enabled && <CountdownTimer />}
          <Header />

          <HeroSection />
          <FeaturedInSection />
          <WebinarInfoSection />
          <JourneySection />
          <TestimonialsSection />
          <InstructorAndExpertsSection />
          <WebinarCalendar />
          <CourseOverviewSection />
          <WhatsAppHubSection />
          <GuaranteeSection />
          <FAQSection />
          <CTASection />
          <Footer />
          
          {/* Sticky WhatsApp CTA that follows the user */}
          <StickyWhatsAppCTA />
        </>
      ) : (
        /* For non-homepage routes, render the dynamic pages component */
        <DynamicPages />
      )}
    </div>
  );
}

export default App;