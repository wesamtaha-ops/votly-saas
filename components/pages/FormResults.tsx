import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as Tabs from '@radix-ui/react-tabs';
import {
  BarChart2,
  Download,
  Search,
  Filter,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  Target,
  Brain,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  PieChart,
  Plus,
} from 'lucide-react';

import { StatsCards } from './FormResults/StatsCards';
import { ResponseTable } from '@/components/forms/responses/table/ResponseTable';
import { AIAnalysis } from './FormResults/AIAnalysis';
import { AdvancedFilters } from './FormResults/AdvancedFilters';
import { MetricsGrid } from './FormResults/MetricsGrid';
import { DeviceBreakdown } from './FormResults/DeviceBreakdown';
import { GeographicDistribution } from './FormResults/GeographicDistribution';
import { QuestionAnalytics } from './FormResults/QuestionAnalytics';
import { AdvancedAnalytics } from './FormResults/AdvancedAnalytics';
import { EngagementTab } from './FormResults/EngagementTab';
import { CompletionTab } from './FormResults/CompletionTab';
import { DemographicsTab } from './FormResults/DemographicsTab';
import { DropOffTab } from '@/components/forms/responses/table/DropOffTab';
import { ResponseDetailsSlideOver } from '@/components/forms/responses/ResponseDetailsSlideOver';
import type { Response, ResponseDetails } from '@/types';

const tabs = [
  { id: 'responses', label: 'Results', icon: FileText },
  { id: 'completion', label: 'In Progress', icon: Target },
  { id: 'drop-off', label: 'Drop-off', icon: TrendingUp },
  { id: 'summary', label: 'Summary', icon: PieChart },
  { id: 'engagement', label: 'Engagement', icon: Clock },
  { id: 'demographics', label: 'Demographics', icon: Users },
  { id: 'analytics', label: 'AI Analytics', icon: BarChart2 },
];

export default function FormResults() {
  const { formId } = useParams();
  const [responses, setResponses] = useState<ResponseDetails[]>(dummyResponses);
  const [dateRange, setDateRange] = useState('7d');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [activeMetricTab, setActiveMetricTab] = useState('overview');
  const [exportFormat, setExportFormat] = useState<'excel' | 'csv' | 'spss'>(
    'excel',
  );
  const [isPremium] = useState(false);
  const [selectedResponse, setSelectedResponse] =
    useState<ResponseDetails | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (response: ResponseDetails) => {
    setSelectedResponse(response);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedResponse(null);
  };

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case 'responses':
        return (
          <ResponseTable
            responses={responses}
            onViewDetails={handleViewDetails}
          />
        );
      case 'summary':
        return <QuestionAnalytics responses={responses} />;
      case 'engagement':
        return <EngagementTab responses={responses} />;
      case 'completion':
        return <CompletionTab responses={responses} />;
      case 'drop-off':
        return <DropOffTab responses={responses} />;
      case 'demographics':
        return <DemographicsTab responses={responses} />;
      case 'analytics':
        return (
          <div className='min-h-screen mb-20 bg-gray-50'>
            <AIAnalysis
              responses={responses}
              showAIAnalysis={true}
              setShowAIAnalysis={() => {}}
            />

            <AdvancedAnalytics responses={responses} isPremium={isPremium} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen py-5 bg-gray-50'>
      {/* Header */}
      <div className=' rounded-t-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <h1 className='text-2xl font-bold  '>Form Results</h1>
          <p className='mt-2 text-lg text-white/90'></p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8'>
        {/* Stats Overview */}
        <StatsCards responses={responses} />

        {/* Tabs Navigation and Content */}
        <Tabs.Root defaultValue='responses' className='space-y-6 rounded mt-10'>
          <div className='bg-[#8b5cf6] rounded-t-lg'>
            <Tabs.List className='flex space-x-1 px-4'>
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Tabs.Trigger
                    key={tab.id}
                    value={tab.id}
                    className='group px-6 py-3 text-sm font-medium text-white/70 hover:text-white border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white focus:outline-none transition-all duration-200 flex items-center space-x-2'>
                    <Icon className='h-4 w-4' />
                    <span>{tab.label}</span>
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>
          </div>

          {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className='outline-none'>
              {renderTabContent(tab.id)}
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <ResponseDetailsSlideOver
          isOpen={isDetailsOpen}
          onClose={handleCloseDetails}
          response={selectedResponse}
        />
      </div>
    </div>
  );
}

// Dummy response data for testing
const dummyResponses: ResponseDetails[] = [
  {
    id: '1',
    submissionStarted: '2024-02-20T10:30:00Z',
    lastUpdated: '2024-02-20T10:35:23Z',
    submissionType: 'web',
    status: 'complete',
    currentPage: 'Thank You',
    browser: 'Chrome 121.0',
    os: 'Windows 11',
    network: 'Broadband',
    networkId: 'AS12345',
    ipAddress: '192.168.1.1',
    answers: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main St',
      city: 'Berlin',
      state: 'Berlin',
      satisfied: 'Yes',
    },
    metadata: {
      timeSpent: '5m 23s',
      pagesVisited: 4,
      completionRate: 100,
    },
  },
  {
    id: '2',
    submissionStarted: '2024-02-21T09:00:00Z',
    lastUpdated: '2024-02-21T09:05:12Z',
    submissionType: 'mobile',
    status: 'partial',
    currentPage: 'Checkout',
    browser: 'Safari 16.0',
    os: 'iOS 16',
    network: 'WiFi',
    networkId: 'AS67890',
    ipAddress: '192.168.2.5',
    answers: {
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1987654321',
      address: '456 Oak Avenue',
      city: 'Munich',
      state: 'Bavaria',
      satisfied: 'No',
    },
    metadata: {
      timeSpent: '3m 10s',
      pagesVisited: 2,
      completionRate: 50,
    },
  },
  {
    id: '3',
    submissionStarted: '2024-02-22T15:15:00Z',
    lastUpdated: '2024-02-22T15:20:45Z',
    submissionType: 'web',
    status: 'complete',
    currentPage: 'Thank You',
    browser: 'Edge 112.0',
    os: 'Windows 10',
    network: 'Fiber',
    networkId: 'AS54321',
    ipAddress: '192.168.3.10',
    answers: {
      fullName: 'Alice Brown',
      email: 'alice.brown@example.com',
      phone: '+49123456789',
      address: '789 Pine Road',
      city: 'Hamburg',
      state: 'Hamburg',
      satisfied: 'Yes',
    },
    metadata: {
      timeSpent: '5m 45s',
      pagesVisited: 5,
      completionRate: 100,
    },
  },
  {
    id: '4',
    submissionStarted: '2024-02-23T08:20:00Z',
    lastUpdated: '2024-02-23T08:25:30Z',
    submissionType: 'mobile',
    status: 'invalid',
    currentPage: 'Error Page',
    browser: 'Chrome 120.0',
    os: 'Android 12',
    network: 'Mobile Data',
    networkId: 'AS67890',
    ipAddress: '192.168.4.11',
    answers: {
      fullName: 'Bob White',
      email: 'bob.white@example.com',
      phone: '+442071234567',
      address: '101 Elm Street',
      city: 'Frankfurt',
      state: 'Hesse',
      satisfied: 'No',
    },
    metadata: {
      timeSpent: '1m 30s',
      pagesVisited: 1,
      completionRate: 20,
    },
  },
  {
    id: '5',
    submissionStarted: '2024-02-24T14:00:00Z',
    lastUpdated: '2024-02-24T14:05:20Z',
    submissionType: 'web',
    status: 'partial',
    currentPage: 'Survey',
    browser: 'Firefox 113.0',
    os: 'MacOS Ventura',
    network: 'Broadband',
    networkId: 'AS56789',
    ipAddress: '192.168.5.12',
    answers: {
      fullName: 'Charlie Green',
      email: 'charlie.green@example.com',
      phone: '+4915781234567',
      address: '202 Willow Lane',
      city: 'Cologne',
      state: 'North Rhine-Westphalia',
      satisfied: 'Yes',
    },
    metadata: {
      timeSpent: '3m 50s',
      pagesVisited: 3,
      completionRate: 60,
    },
  },
  // Add more entries as needed
];