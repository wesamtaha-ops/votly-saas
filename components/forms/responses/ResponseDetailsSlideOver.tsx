import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Globe, Monitor, Cpu, Wifi, Hash, Clock, Calendar,
  CheckCircle, AlertTriangle, Smartphone, ArrowRight
} from 'lucide-react';
import { format } from 'date-fns';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { ResponseDetails } from '@/types';

interface ResponseDetailsSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  response: ResponseDetails | null;
}

const COLORS = ['#4F46E5', '#7C3AED', '#EC4899', '#10B981', '#F59E0B'];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'complete':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'partial':
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case 'invalid':
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

const SubmissionTypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'web':
      return <Globe className="h-5 w-5 text-blue-500" />;
    case 'mobile':
      return <Smartphone className="h-5 w-5 text-purple-500" />;
    case 'api':
      return <Cpu className="h-5 w-5 text-indigo-500" />;
    default:
      return null;
  }
};

export function ResponseDetailsSlideOver({ isOpen, onClose, response }: ResponseDetailsSlideOverProps) {
  if (!response) return null;

  const pieData = Object.entries(response.answers)
    .filter(([key, value]) => typeof value === 'number')
    .map(([key, value]) => ({
      name: key,
      value: value
    }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />

          {/* Slide Over Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 left-0 w-[600px] bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Response Details</h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 py-4">
                {/* Status Banner */}
                <div className={`mb-6 p-4 rounded-lg ${
                  response.status === 'complete' ? 'bg-green-50' :
                  response.status === 'partial' ? 'bg-yellow-50' : 'bg-red-50'
                }`}>
                  <div className="flex items-center">
                    <StatusIcon status={response.status} />
                    <div className="ml-3">
                      <h3 className={`text-sm font-medium ${
                        response.status === 'complete' ? 'text-green-800' :
                        response.status === 'partial' ? 'text-yellow-800' : 'text-red-800'
                      }`}>
                        {response.status.charAt(0).toUpperCase() + response.status.slice(1)} Response
                      </h3>
                      <p className="text-sm text-gray-600">
                        Completion Rate: {response.metadata.completionRate}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Submission Started</p>
                        <p className="text-sm text-gray-900">
                          {format(new Date(response.submissionStarted), 'PPpp')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Last Updated</p>
                        <p className="text-sm text-gray-900">
                          {format(new Date(response.lastUpdated), 'PPpp')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <SubmissionTypeIcon type={response.submissionType} />
                      <div className="ml-2">
                        <p className="text-sm font-medium text-gray-500">Submission Type</p>
                        <p className="text-sm text-gray-900">
                          {response.submissionType.charAt(0).toUpperCase() + response.submissionType.slice(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Monitor className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Browser & OS</p>
                        <p className="text-sm text-gray-900">
                          {response.browser} on {response.os}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Wifi className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Network</p>
                        <p className="text-sm text-gray-900">{response.network}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">IP Address</p>
                        <p className="text-sm text-gray-900">{response.ipAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Data */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Response Summary</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Answers</h3>
                    <div className="space-y-4">
                      {Object.entries(response.answers).map(([question, answer], index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">{question}</p>
                          <p className="text-sm text-gray-900">
                            {typeof answer === 'object' ? JSON.stringify(answer) : String(answer)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Response Metadata</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-500">Time Spent</p>
                        <p className="text-lg font-semibold text-gray-900">{response.metadata.timeSpent}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-500">Pages Visited</p>
                        <p className="text-lg font-semibold text-gray-900">{response.metadata.pagesVisited}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                        <p className="text-lg font-semibold text-gray-900">{response.metadata.completionRate}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}