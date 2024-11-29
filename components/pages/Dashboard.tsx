import React from 'react';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { RecentForms } from '@/components/dashboard/RecentForms';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { CreateFormButton } from '@/components/common/CreateFormButton';
import { Crown } from 'lucide-react';

export default function Dashboard() {
  const subscription = {
    plan: 'Free',
    limits: {
      formsRemaining: 2,
      responsesRemaining: 85,
      totalForms: 3,
      totalResponses: 100
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <CreateFormButton />
        </div>

        {/* Rest of the dashboard content */}
        <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* ... */}
        </div>
        
        <DashboardStats />
        
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentForms />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}