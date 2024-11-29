import React from 'react';
import { Navigation } from '@/components/navigation/Navigation';

import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';
import { CookieConsentProvider } from './CookieConsent/CookieConsentProvider';
import { CookieConsentBanner } from './CookieConsent/CookieConsentBanner';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Hide navigation and footer for form builder routes
  const isFormBuilder = location.pathname.includes('/forms/new');

  return (
    <CookieConsentProvider>
      <div className="min-h-screen flex flex-col relative">
        {!isFormBuilder && (
          <div className="relative z-50">
            <Navigation />
          </div>
        )}
        <main className={`flex-grow ${isFormBuilder ? 'bg-gray-50' : ''}`}>
          {children}
        </main>
        {!isFormBuilder && <Footer />}
        <CookieConsentBanner />
      </div>
    </CookieConsentProvider>
  );
};