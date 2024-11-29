import React, { useState } from 'react';
import { AccountTabs, TabType } from '@/components/account/AccountTabs';
import { ProfileTab } from '@/components/account/ProfileTab';
import { SubscriptionTab } from '@/components/account/SubscriptionTab';
import { NotificationsTab } from '@/components/account/NotificationsTab';
import { TeamTab } from '@/components/account/TeamTab';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}

export default function Account() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    company: 'Acme Inc'
  });

  const handleProfileUpdate = (data: ProfileData) => {
    setProfileData(data);
    console.log('Profile updated:', data);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab profileData={profileData} onProfileUpdate={handleProfileUpdate} />;
      case 'subscription':
        return <SubscriptionTab />;
      case 'notifications':
        return <NotificationsTab />;
      case 'team':
        return <TeamTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <AccountTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}