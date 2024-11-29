import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as Tabs from '@radix-ui/react-tabs';
import {
  BarChart2, Download, Search, Filter, Calendar,
  TrendingUp, Users, Clock, Target, Brain,
  ChevronDown, ArrowUpRight, ArrowDownRight
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
import { ResponseDetailsSlideOver } from '@/components/forms/responses/ResponseDetailsSlideOver';
import type { Response, ResponseDetails } from '@/types';

const tabs = [
  { id: 'responses', label: 'Responses' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'completion', label: 'Completion' },
  { id: 'demographics', label: 'Demographics' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'advanced', label: 'Advanced' }
];

// Dummy response data
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
      comments: 'Great experience overall! The product exceeded my expectations.'
    },
    metadata: {
      timeSpent: '5m 23s',
      pagesVisited: 4,
      completionRate: 100
    }
  },
  {
    id: '2',
    submissionStarted: '2024-02-20T11:15:00Z',
    lastUpdated: '2024-02-20T11:18:45Z',
    submissionType: 'mobile',
    status: 'complete',
    currentPage: 'Thank You',
    browser: 'Safari Mobile 17.0',
    os: 'iOS 17.3',
    network: 'Mobile',
    networkId: 'AS67890',
    ipAddress: '192.168.1.2',
    answers: {
      satisfaction: 3.5,
      recommendation: 7,
      productQuality: 4,
      deliveryExperience: 3,
      customerService: 4,
      comments: 'Product is good but delivery took longer than expected.'
    },
    metadata: {
      timeSpent: '3m 45s',
      pagesVisited: 4,
      completionRate: 100
    }
  },
  {
    id: '3',
    submissionStarted: '2024-02-20T12:00:00Z',
    lastUpdated: '2024-02-20T12:02:30Z',
    submissionType: 'web',
    status: 'partial',
    currentPage: 'Product Feedback',
    browser: 'Firefox 123.0',
    os: 'macOS 14.3',
    network: 'Broadband',
    networkId: 'AS34567',
    ipAddress: '192.168.1.3',
    answers: {
      satisfaction: 4.0,
      productQuality: 4,
      deliveryExperience: null,
      customerService: null,
      comments: null
    },
    metadata: {
      timeSpent: '2m 30s',
      pagesVisited: 2,
      completionRate: 50
    }
  },
  {
    id: '4',
    submissionStarted: '2024-02-20T13:45:00Z',
    lastUpdated: '2024-02-20T13:52:15Z',
    submissionType: 'api',
    status: 'complete',
    currentPage: 'Thank You',
    browser: 'API Client',
    os: 'Server',
    network: 'Cloud',
    networkId: 'AS89012',
    ipAddress: '192.168.1.4',
    answers: {
      satisfaction: 5.0,
      recommendation: 10,
      productQuality: 5,
      deliveryExperience: 5,
      customerService: 5,
      comments: 'Excellent service and product quality!'
    },
    metadata: {
      timeSpent: '7m 15s',
      pagesVisited: 4,
      completionRate: 100
    }
  },
  {
    id: '5',
    submissionStarted: '2024-02-20T14:30:00Z',
    lastUpdated: '2024-02-20T14:31:10Z',
    submissionType: 'web',
    status: 'invalid',
    currentPage: 'Product Feedback',
    browser: 'Edge 121.0',
    os: 'Windows 10',
    network: 'Broadband',
    networkId: 'AS45678',
    ipAddress: '192.168.1.5',
    answers: {
      satisfaction: null,
      recommendation: null,
      productQuality: null,
      deliveryExperience: null,
      customerService: null,
      comments: 'Session timeout'
    },
    metadata: {
      timeSpent: '1m 10s',
      pagesVisited: 1,
      completionRate: 10
    }
  }
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
      case 'engagement':
        return <EngagementTab responses={responses} />;
      case 'completion':
        return <CompletionTab responses={responses} />;
      case 'demographics':
        return <DemographicsTab responses={responses} />;
      case 'analysis':
        return (
          <div className="space-y-6">
            <QuestionAnalytics responses={responses} />
            <AIAnalysis
              responses={responses}
              showAIAnalysis={true}
              setShowAIAnalysis={() => {}}
            />
          </div>
        );
      case 'advanced':
        return (
          <AdvancedAnalytics 
            responses={responses}
            isPremium={isPremium}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Form Results</h1>
            <p className="mt-1 text-sm text-gray-500">
              Analyzing responses and metrics for your form
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {}}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </button>
            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value as any)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
              <option value="spss">SPSS</option>
            </select>
          </div>
        </div>

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
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </button>
            </div>
          </div>

          {showAdvancedFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <AdvancedFilters
                filters={{
                  demographics: 'all',
                  location: 'all',
                  sentiment: 'all'
                }}
                onFilterChange={() => {}}
              />
            </div>
          )}
        </div>

        {/* Tabs Navigation and Content */}
        <Tabs.Root defaultValue="responses" className="space-y-6">
          <Tabs.List className="flex space-x-1 border-b border-gray-200">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={`group px-4 py-2 text-sm font-medium border-b-2 focus:outline-none data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500 hover:text-gray-700 hover:border-gray-300`}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

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