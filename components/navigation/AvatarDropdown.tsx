import React from 'react';
import { Link } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { 
  Settings, HelpCircle, Phone, Home, Gift, LogOut,
  LayoutDashboard, FileText
} from 'lucide-react';

interface AvatarDropdownProps {
  user: {
    name?: string;
    email: string;
  };
  onLogout: () => void;
}

export function AvatarDropdown({ user, onLogout }: AvatarDropdownProps) {
  const firstLetter = user.name?.[0] || user.email[0];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-medium text-lg">
            W
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 mt-2"
          sideOffset={5}
          align="end"
        >
          {/* User Info */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-medium text-xl">
                W
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name || 'User'}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Account Section */}
          <div className="px-2 py-2">
            <DropdownMenu.Item asChild>
              <Link to="/account" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <Settings className="w-4 h-4 mr-3" />
                Account Settings
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link to="/dashboard" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <LayoutDashboard className="w-4 h-4 mr-3" />
                My Dashboard
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link to="/forms" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <FileText className="w-4 h-4 mr-3" />
                My Forms
              </Link>
            </DropdownMenu.Item>
          </div>

          {/* Resources Section */}
          <div className="border-t border-gray-200 px-2 py-2">
            <DropdownMenu.Item asChild>
              <Link to="/help" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <HelpCircle className="w-4 h-4 mr-3" />
                Help
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link to="/contact" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <Phone className="w-4 h-4 mr-3" />
                Contact Us
              </Link>
            </DropdownMenu.Item>
          </div>

          {/* Additional Links */}
          <div className="border-t border-gray-200 px-2 py-2">
            <DropdownMenu.Item asChild>
              <Link to="/refer" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <Gift className="w-4 h-4 mr-3 text-indigo-600" />
                <span>Refer friends, get rewards</span>
                <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link to="/" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <Home className="w-4 h-4 mr-3 text-indigo-600" />
                Homepage
              </Link>
            </DropdownMenu.Item>
          </div>

          {/* Logout */}
          <div className="border-t border-gray-200 px-2 py-2">
            <DropdownMenu.Item asChild>
              <button 
                onClick={onLogout}
                className="flex w-full items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Log out
              </button>
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}