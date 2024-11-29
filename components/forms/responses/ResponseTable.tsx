import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, Download, Clock, CheckCircle, AlertTriangle, 
  MessageSquare, ChevronDown, ChevronUp, Filter,
  ArrowUpRight, ArrowDownRight 
} from 'lucide-react';
import type { ResponseDetails } from '@/types';

interface ResponseTableProps {
  responses: ResponseDetails[];
  onViewDetails: (response: ResponseDetails, activeTab?: string) => void;
}

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'complete':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          icon: <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
        };
      case 'partial':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-800',
          icon: <Clock className="h-4 w-4 text-yellow-500 mr-1" />
        };
      case 'invalid':
        return {
          bg: 'bg-red-100',
          text: 'text-red-800',
          icon: <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          icon: null
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.bg} ${styles.text}`}>
      {styles.icon}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export function ResponseTable({ responses, onViewDetails }: ResponseTableProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Individual Responses</h3>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submission Info
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Platform
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Comments
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {responses.map((response) => (
              <tr key={response.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {new Date(response.submissionStarted).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {response.metadata.timeSpent}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {response.browser}
                  </div>
                  <div className="text-sm text-gray-500">
                    {response.os}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={response.status} />
                  <div className="text-xs text-gray-500 mt-1">
                    {response.metadata.completionRate}% Complete
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    onClick={() => onViewDetails(response, 'comments')}
                    className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-900 group"
                  >
                    <MessageSquare className="h-4 w-4 mr-1.5 group-hover:text-indigo-900" />
                    <span className="group-hover:underline">
                      {response.comments?.length || 0} Comments
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onViewDetails(response, 'details')}
                      className="text-indigo-600 hover:text-indigo-900 flex items-center"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}