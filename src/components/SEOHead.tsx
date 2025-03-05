import React, { useEffect } from 'react';
import { useContent } from './ContentProvider';

const SEOHead: React.FC = () => {
  const { general, seo } = useContent();
  
  useEffect(() => {
    // Update document title
    document.title = seo?.metaTitle || general?.siteTitle || "Start Solo Blueprint";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo?.metaDescription || general?.siteDescription || "");
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo?.metaKeywords || "");
    
    // Update Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: seo?.metaTitle || general?.siteTitle || "Start Solo Blueprint" },
      { property: 'og:description', content: seo?.metaDescription || general?.siteDescription || "" },
      { property: 'og:image', content: seo?.ogImage || "" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href }
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Update Twitter meta tags
    const twitterTags = [
      { property: 'twitter:card', content: seo?.twitterCard || "summary_large_image" },
      { property: 'twitter:title', content: seo?.metaTitle || general?.siteTitle || "Start Solo Blueprint" },
      { property: 'twitter:description', content: seo?.metaDescription || general?.siteDescription || "" },
      { property: 'twitter:image', content: seo?.ogImage || "" }
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Update structured data
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Start Solo Blueprint Webinar",
      "description": "Learn how to build a profitable solo business without burning out in this 90-minute webinar.",
      "startDate": seo?.eventDate || "2025-06-15T14:00:00-04:00",
      "endDate": seo?.eventEndDate || "2025-06-15T15:30:00-04:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://startsoloblueprint.com/webinar"
      },
      "image": seo?.ogImage || "",
      "offers": {
        "@type": "Offer",
        "price": "99",
        "priceCurrency": "INR",
        "availability": "https://schema.org/LimitedAvailability",
        "validFrom": "2025-05-01",
        "url": "https://startsoloblueprint.com/#webinar-dates"
      },
      "performer": {
        "@type": "Person",
        "name": "Diksha Sethi",
        "jobTitle": "Founder of Start Solo Blueprint"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Start Solo Blueprint",
        "url": "https://startsoloblueprint.com"
      }
    };
    
    scriptTag.textContent = JSON.stringify(structuredData);
    
    // Update Google Analytics
    if (seo?.gaId && seo.gaId !== 'GA_MEASUREMENT_ID') {
      let gaScript = document.querySelector('script[src*="googletagmanager"]');
      if (!gaScript) {
        gaScript = document.createElement('script');
        gaScript.setAttribute('async', '');
        gaScript.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${seo.gaId}`);
        document.head.appendChild(gaScript);
        
        const gaInitScript = document.createElement('script');
        gaInitScript.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${seo.gaId}');
          
          // Event tracking for conversion funnel
          document.addEventListener('DOMContentLoaded', function() {
            // Track CTA clicks
            document.querySelectorAll('[data-tracking]').forEach(function(element) {
              element.addEventListener('click', function() {
                gtag('event', 'click', {
                  'event_category': 'conversion',
                  'event_label': this.getAttribute('data-tracking')
                });
              });
            });
          });
        `;
        document.head.appendChild(gaInitScript);
      }
    }
  }, [general, seo]);
  
  return null; // This component doesn't render anything visible
};

export default SEOHead;