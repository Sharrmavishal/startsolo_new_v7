import React from 'react';
import { BookOpen, Mail, Instagram, Twitter, Facebook, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rich text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary-light" />
              <span className="font-bold text-xl">Start Solo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your guide to building a successful solo business without overwhelm.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#journey" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="#webinar" className="text-gray-400 hover:text-white transition">Accelerator Session</a></li>
              <li><a href="#course" className="text-gray-400 hover:text-white transition">The Course</a></li>
              <li><a href="#speakers" className="text-gray-400 hover:text-white transition">Expert Speakers</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#whatsapp-hub" className="text-gray-400 hover:text-white transition flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1 text-green-400" />
                  <span>WhatsApp Hub (Free)</span>
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Free Business Assessment</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Podcast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">
              Have questions about the upcoming sessions or the course? We're here to help.
            </p>
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-primary-light mr-2" />
              <a href="mailto:hello@startsolo.in" className="text-gray-400 hover:text-white transition">
                hello@startsolo.in
              </a>
            </div>
            <a 
              href="/support" 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
        
        <div className="border-t border-rich-light pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Start Solo. All rights reserved.</p>
          <p>Results mentioned are not typical and will vary based on effort, implementation, and market conditions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;