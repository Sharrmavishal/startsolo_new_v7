import React from 'react';
import { useEffect, useState } from 'react';
import AboutPage from './AboutPage';
import SupportPage from './SupportPage';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Header from './Header';
import Footer from './Footer';

// This component will handle dynamic page rendering based on routes
const DynamicPages: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  
  useEffect(() => {
    // Function to extract page slug from URL
    const getPageInfo = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') return { page: null, slug: null };
      
      // Check if it's a blog post
      if (path.startsWith('/blog/')) {
        const blogSlug = path.substring(6); // Remove '/blog/'
        if (blogSlug) {
          return { page: 'blog-post', slug: blogSlug };
        }
      }
      
      // Check if it's the blog index
      if (path === '/blog') {
        return { page: 'blog', slug: null };
      }
      
      // Check if it's the about page
      if (path === '/about') {
        return { page: 'about', slug: null };
      }
      
      // Check if it's the support page
      if (path === '/support') {
        return { page: 'support', slug: null };
      }
      
      // Otherwise, it's a regular page
      return { page: path.substring(1), slug: null }; // Remove leading slash
    };
    
    // Set current page based on URL
    const { page, slug } = getPageInfo();
    setCurrentPage(page);
    setCurrentSlug(slug);
    
    // Listen for route changes (for SPA navigation)
    const handleRouteChange = () => {
      const { page, slug } = getPageInfo();
      setCurrentPage(page);
      setCurrentSlug(slug);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  // If we're on the homepage, don't render anything
  if (!currentPage) return null;
  
  // Render the appropriate component based on the current page
  const renderPageContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'support':
        return <SupportPage />;
      case 'blog':
        return <BlogList />;
      case 'blog-post':
        return <BlogPost slug={currentSlug || ''} />;
      default:
        // For regular pages, render a simple page component
        return (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace(/-/g, ' ')}
                </h1>
                
                <div className="prose max-w-none">
                  <p>This is a dynamic page that would be loaded from the CMS.</p>
                  <p>In a production environment, this content would be fetched from your content management system based on the page slug: <strong>{currentPage}</strong></p>
                </div>
                
                <div className="mt-8">
                  <a href="/" className="text-primary hover:text-primary-dark font-medium">
                    &larr; Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <>
      <Header />
      {renderPageContent()}
      <Footer />
    </>
  );
};

export default DynamicPages;