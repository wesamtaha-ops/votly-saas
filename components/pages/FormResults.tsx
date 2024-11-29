import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as Tabs from '@radix-ui/react-tabs';
import { BarChart2, Download, Search, Filter, Calendar, TrendingUp, Users, Clock, Target, Brain, ChevronDown, ArrowUpRight, ArrowDownRight, FileText, PieChart, Plus } from 'lucide-react';

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
import { ResponseDetailsSlideOver } from '@/components/forms/responses/ResponseDetailsSlideOver';
import type { Response, ResponseDetails } from '@/types';

const tabs = [
  { id: 'responses', label: 'In Progress', icon: FileText },
  { id: 'summary', label: 'Summary', icon: PieChart },
  { id: 'engagement', label: 'Engagement', icon: Clock },
  { id: 'completion', label: 'Completion', icon: Target },
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
  const [exportFormat, setExportFormat] = useState<'excel' | 'csv' | 'spss'>('excel');
  const [isPremium] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<ResponseDetails | null>(null);
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
      case 'demographics':
        return <DemographicsTab responses={responses} />;
      case 'analytics':
        return (
          <div className="min-h-screen mb-20 bg-gray-50">
           <AIAnalysis 
            responses={responses} 
            showAIAnalysis={true} 
            setShowAIAnalysis={() => {}} 
          />
          
          <AdvancedAnalytics 
            responses={responses} 
            isPremium={isPremium} 
          />
          </div>
        );
     
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-5 bg-gray-50">
      {/* Header */}
      <div className=" rounded-t-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold  ">Form Results</h1>
          <p className="mt-2 text-lg text-white/90">
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Stats Overview */}
        <StatsCards responses={responses} />

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 my-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search responses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="custom">Custom range</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabs Navigation and Content */}
        <Tabs.Root defaultValue="responses" className="space-y-6">
          <div className="bg-[#8b5cf6] rounded-t-lg">
            <Tabs.List className="flex space-x-1 px-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Tabs.Trigger
                    key={tab.id}
                    value={tab.id}
                    className="group px-6 py-3 text-sm font-medium text-white/70 hover:text-white border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white focus:outline-none transition-all duration-200 flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>
          </div>

          {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="outline-none">
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
      satisfaction: 4.5,
      recommendation: 9,
      productQuality: 5,
      deliveryExperience: 4,
      customerService: 5,
      comments: 'Great experience overall! The product exceeded my expectations.',
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
      satisfaction: 3.5,
      recommendation: 7,
      productQuality: 4,
      deliveryExperience: 3,
      customerService: 4,
      comments: 'Decent experience, but delivery could be faster.',
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
      satisfaction: 5,
      recommendation: 10,
      productQuality: 5,
      deliveryExperience: 5,
      customerService: 5,
      comments: 'Absolutely amazing! Will recommend to everyone.',
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
      satisfaction: 2.5,
      recommendation: 5,
      productQuality: 3,
      deliveryExperience: 2,
      customerService: 2,
      comments: 'The product was fine, but the delivery experience was terrible.',
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
      satisfaction: 4,
      recommendation: 8,
      productQuality: 4.5,
      deliveryExperience: 3.5,
      customerService: 4,
      comments: 'Overall good, but there is room for improvement in delivery.',
    },
    metadata: {
      timeSpent: '3m 50s',
      pagesVisited: 3,
      completionRate: 60,
    },
  },
  {
    id: '6',
    submissionStarted: '2024-02-25T11:45:00Z',
    lastUpdated: '2024-02-25T11:50:10Z',
    submissionType: 'web',
    status: 'complete',
    currentPage: 'Thank You',
    browser: 'Chrome 121.0',
    os: 'Windows 11',
    network: 'Broadband',
    networkId: 'AS12345',
    ipAddress: '192.168.6.13',
    answers: {
      satisfaction: 3.8,
      recommendation: 6,
      productQuality: 3.8,
      deliveryExperience: 3,
      customerService: 4,
      comments: 'Good product, but slow delivery.',
    },
    metadata: {
      timeSpent: '5m 10s',
      pagesVisited: 4,
      completionRate: 100,
    },
  },
  {
    id: '7',
    submissionStarted: '2024-02-26T13:00:00Z',
    lastUpdated: '2024-02-26T13:05:15Z',
    submissionType: 'mobile',
    status: 'partial',
    currentPage: 'Contact Us',
    browser: 'Safari 16.0',
    os: 'iOS 15',
    network: 'WiFi',
    networkId: 'AS67890',
    ipAddress: '192.168.7.14',
    answers: {
      satisfaction: 4.2,
      recommendation: 8,
      productQuality: 4,
      deliveryExperience: 4,
      customerService: 4.5,
      comments: 'Satisfied with the service, will buy again.',
    },
    metadata: {
      timeSpent: '2m 30s',
      pagesVisited: 2,
      completionRate: 40,
    },
  },
  {
    id: '8',
    submissionStarted: '2024-02-27T16:30:00Z',
    lastUpdated: '2024-02-27T16:35:22Z',
    submissionType: 'web',
    status: 'complete',
    currentPage: 'Thank You',
    browser: 'Edge 113.0',
    os: 'Windows 10',
    network: 'Fiber',
    networkId: 'AS54321',
    ipAddress: '192.168.8.15',
    answers: {
      satisfaction: 5,
      recommendation: 10,
      productQuality: 5,
      deliveryExperience: 5,
      customerService: 5,
      comments: 'Perfect service! Could not ask for more.',
    },
    metadata: {
      timeSpent: '6m 10s',
      pagesVisited: 5,
      completionRate: 100,
    },
  },
  {
    id: '9',
    submissionStarted: '2024-02-28T17:30:00Z',
    lastUpdated: '2024-02-28T17:35:22Z',
    submissionType: 'mobile',
    status: 'invalid',
    currentPage: 'Error Page',
    browser: 'Chrome 120.0',
    os: 'Android 13',
    network: 'Mobile Data',
    networkId: 'AS56789',
    ipAddress: '192.168.9.16',
    answers: {
      satisfaction: 3.5,
      recommendation: 6,
      productQuality: 3,
      deliveryExperience: 2.5,
      customerService: 3.5,
      comments: 'Mixed feelings about the service.',
    },
    metadata: {
      timeSpent: '1m 15s',
      pagesVisited: 1,
      completionRate: 30,
    },
  },
  {
    id: '10',
    submissionStarted: '2024-03-01T10:30:00Z',
    lastUpdated: '2024-03-01T10:35:22Z',
    submissionType: 'web',
    status: 'complete',
    currentPage: 'Thank You',
    browser: 'Firefox 114.0',
    os: 'Ubuntu 22.04',
    network: 'Broadband',
    networkId: 'AS54321',
    ipAddress: '192.168.10.17',
    answers: {
      satisfaction: 4,
      recommendation: 7,
      productQuality: 4.5,
      deliveryExperience: 4,
      customerService: 4,
      comments: 'Reliable, would recommend.',
    },
    metadata: {
      timeSpent: '5m 30s',
      pagesVisited: 4,
      completionRate: 100,
    },
  },
];
