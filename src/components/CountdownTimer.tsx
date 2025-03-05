import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, AlertCircle, Calendar } from 'lucide-react';
import { useContent } from './ContentProvider';

const CountdownTimer = () => {
  const { general } = useContent();
  
  // Get target date from CMS settings or use fallback
  const getTargetDate = () => {
    // If there's a specific countdown date in the CMS, use that
    if (general?.countdown?.targetDate) {
      return new Date(general.countdown.targetDate).getTime();
    }
    
    // Otherwise calculate the next Sunday midnight in IST
    // Create date object for current time in local timezone
    const now = new Date();
    
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours and 30 minutes in milliseconds
    const nowIST = new Date(now.getTime() + (istOffset + now.getTimezoneOffset() * 60 * 1000));
    
    // Get the current day of the week in IST (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = nowIST.getDay();
    
    // Calculate days until next Sunday
    const daysUntilNextSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
    
    // Set time to midnight IST on next Sunday
    const nextSundayMidnight = new Date(nowIST);
    nextSundayMidnight.setDate(nowIST.getDate() + daysUntilNextSunday);
    nextSundayMidnight.setHours(0, 0, 0, 0);
    
    // Convert back to local timezone for the countdown
    return new Date(nextSundayMidnight.getTime() - (istOffset + now.getTimezoneOffset() * 60 * 1000)).getTime();
  };
  
  const [targetDate, setTargetDate] = useState(getTargetDate());
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        // If countdown is finished, reset to next target date
        setTargetDate(getTargetDate());
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  // If countdown is disabled in CMS, don't show anything
  if (general?.countdown?.enabled === false) {
    return null;
  }

  // Replace the message placeholder with the actual days count
  const countdownMessage = general?.countdown?.message 
    ? general.countdown.message.replace('{days}', timeLeft.days.toString())
    : `URGENT: Only ${timeLeft.days} days left before registration closes!`;

  const buttonText = general?.countdown?.buttonText || "Reserve Your Spot";
  const buttonUrl = general?.countdown?.buttonUrl || "#webinar-dates";

  return (
    <div className="bg-rich text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center mb-4 md:mb-0 md:mr-6">
            <AlertCircle className="h-5 w-5 mr-2 text-primary-light animate-pulse" />
            <span className="font-medium">
              {countdownMessage}
            </span>
          </div>
          
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="bg-rich-light text-primary-light rounded-md px-3 py-2 text-xl font-bold">{timeLeft.days}</div>
              <div className="text-xs mt-1">Days</div>
            </div>
            <div className="text-center">
              <div className="bg-rich-light text-primary-light rounded-md px-3 py-2 text-xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs mt-1">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-rich-light text-primary-light rounded-md px-3 py-2 text-xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs mt-1">Minutes</div>
            </div>
            <div className="text-center">
              <div className="bg-rich-light text-primary-light rounded-md px-3 py-2 text-xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs mt-1">Seconds</div>
            </div>
          </div>
          
          <a 
            href={buttonUrl} 
            className="md:ml-6 mt-4 md:mt-0 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition flex items-center shadow-md"
            aria-label="Reserve your spot for the Solo Accelerator Session before registration closes"
            data-tracking="countdown-cta"
          >
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;