import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="footer-section">
            <h3 className="footer-heading">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/pricing" className="footer-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/templates" className="footer-link">
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/help" className="footer-link">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/legal/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/cookies" className="footer-link">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Votly. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Github className="footer-social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Twitter className="footer-social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Linkedin className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};