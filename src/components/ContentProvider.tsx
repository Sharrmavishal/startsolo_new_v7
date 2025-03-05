import React, { createContext, useContext, ReactNode } from 'react';
import { useTheme } from '../utils/themeLoader';

// Default content values
const defaultContent = {
  general: {
    siteTitle: "Start Solo Blueprint",
    siteDescription: "Build a profitable solo business without burnout",
    cohortStartDate: "June 15, 2025",
    currentCohort: 12,
    nextCohort: 13,
    nextCohortStartDate: "July 15, 2025",
    countdown: {
      enabled: true,
      message: "URGENT: Only {days} days left before registration closes!",
      buttonText: "Reserve Your Spot"
    }
  },
  header: {
    logoText: "Start Solo",
    navLinks: [
      { label: "Accelerator Session", url: "#webinar-info" },
      { label: "Instructor", url: "#instructor" },
      { label: "Results", url: "#testimonials" },
      { label: "Full Course", url: "#course" },
      { label: "FAQ", url: "#faq" }
    ],
    ctaButton: {
      text: "Reserve Your Spot",
      url: "#webinar-dates",
      trackingId: "header-cta"
    },
    whatsappButton: {
      text: "Join Hub",
      url: "#whatsapp-hub",
      trackingId: "header-whatsapp"
    },
    mobileMenu: {
      ctaText: "Reserve Your Spot",
      whatsappText: "Join WhatsApp Hub"
    }
  },
  seo: {
    metaTitle: "Start Solo Blueprint - Build a Profitable Solo Business Without Burnout",
    metaDescription: "Join our exclusive webinar to discover how to build a profitable solo business without burning out. Learn proven strategies from successful entrepreneurs.",
    metaKeywords: "solo entrepreneur, webinar, business blueprint, freelance, side hustle, online business",
    ogImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    twitterCard: "summary_large_image",
    gaId: "GA_MEASUREMENT_ID",
    eventDate: "2025-06-15T14:00:00-04:00",
    eventEndDate: "2025-06-15T15:30:00-04:00"
  }
};

// Create the context
const ContentContext = createContext(defaultContent);

// Create a provider component
export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load content (in a real implementation, this would fetch from JSON files or an API)
  const content = defaultContent;
  
  // Apply theme from branding settings
  useTheme();
  
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

// Create a hook to use the content
export const useContent = () => {
  const context = useContext(ContentContext);
  return context;
};