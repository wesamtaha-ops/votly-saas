import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/components/providers/AuthProvider';
import { CreateFormButton } from '../common/CreateFormButton';
import { NavDropdown } from './NavDropdown';
import { ProductsMenu } from './ProductsMenu';
import { IndustriesMenu } from './IndustriesMenu';
import { ResourcesMenu } from './ResourcesMenu';
import { TemplatesMenu } from './TemplatesMenu';
import { MobileMenu } from './MobileMenu';
import { AvatarDropdown } from './AvatarDropdown';
import { Logo } from '@/components/common/Logo';
import { Bell, CheckCircle, AlertTriangle, Clock, Menu } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'info';
  timestamp: string;
  read: boolean;
}

export function Navigation() {
  const { user, logout } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className='bg-white border-b border-gray-200 relative'
      onMouseLeave={handleMouseLeave} // Added to hide the menu when leaving the nav area
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Logo />
            <div className='hidden lg:flex lg:ml-10 lg:space-x-8'>
              <NavDropdown
                title='Products'
                isOpen={activeDropdown === 'products'}
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}>
                <ProductsMenu />
              </NavDropdown>

              <NavDropdown
                title='Industries'
                isOpen={activeDropdown === 'industries'}
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}>
                <IndustriesMenu />
              </NavDropdown>

              <NavDropdown
                title='Templates'
                isOpen={activeDropdown === 'templates'}
                onMouseEnter={() => handleMouseEnter('templates')}
                onMouseLeave={handleMouseLeave}>
                <TemplatesMenu />
              </NavDropdown>

              <NavDropdown
                title='Resources'
                isOpen={activeDropdown === 'resources'}
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
                >
                <ResourcesMenu />
              </NavDropdown>

              <Link
                to='/pricing'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600'>
                Pricing
              </Link>
            </div>
          </div>

          <div className='flex items-center'>
            {user ? (
              <div className='flex items-center space-x-4'>
                {/* Other buttons and menus */}
                <CreateFormButton />
                <AvatarDropdown user={user} onLogout={logout} />
              </div>
            ) : (
              <div className='flex items-center space-x-4'>
                <Link
                  to='/login'
                  className='text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-colors duration-200'>
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium'>
                  Get Started
                </Link>
              </div>
            )}

            <div className='flex items-center lg:hidden ml-4'>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open main menu</span>
                <Menu className='block h-6 w-6' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
        onLogout={logout}
      />
    </nav>
  );
}
