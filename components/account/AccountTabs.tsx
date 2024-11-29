import React from 'react';
import { User, CreditCard, Bell, Users } from 'lucide-react';

export type TabType = 'profile' | 'subscription' | 'notifications' | 'team';

interface Tab {
  id: TabType;
  name: string;
  icon: React.ElementType;
}

interface AccountTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const tabs: Tab[] = [
  { id: 'profile', name: 'Profile', icon: User },
  { id: 'subscription', name: 'Subscription', icon: CreditCard },
  { id: 'notifications', name: 'Notifications', icon: Bell },
  { id: 'team', name: 'Team Members', icon: Users },
];

export function AccountTabs({ activeTab, onTabChange }: AccountTabsProps) {
  return (
    <div className="w-full lg:w-64 space-y-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`w-full flex items-center space-x-3 px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === tab.id
              ? 'bg-indigo-600 text-white'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <tab.icon className="h-5 w-5" />
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
}