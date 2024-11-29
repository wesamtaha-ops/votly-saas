import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, AlertTriangle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { Response } from './types';

interface QuestionAnalyticsProps {
  responses: Response[];
}

interface QuestionData {
  question: string;
  responseRate: number;
  avgScore: number | null;
  skippedCount: number;
  status: 'good' | 'warning';
  responses: {
    label: string;
    value: number;
    color: string;
  }[];
}

const COLORS = ['#4F46E5', '#7C3AED', '#EC4899', '#10B981', '#F59E0B'];

export function QuestionAnalytics({ responses }: QuestionAnalyticsProps) {
  const [expandedQuestion, setExpandedQuestion] = React.useState<string | null>(null);

  const calculateQuestionMetrics = (): QuestionData[] => {
    // Mock data - in a real app this would be calculated from actual responses
    return [
      {
        question: 'How satisfied are you with our product?',
        responseRate: 98,
        avgScore: 4.5,
        skippedCount: 2,
        status: 'good',
        responses: [
          { label: 'Very Satisfied', value: 45, color: COLORS[0] },
          { label: 'Satisfied', value: 30, color: COLORS[1] },
          { label: 'Neutral', value: 15, color: COLORS[2] },
          { label: 'Dissatisfied', value: 7, color: COLORS[3] },
          { label: 'Very Dissatisfied', value: 3, color: COLORS[4] }
        ]
      },
      {
        question: 'Would you recommend us to others?',
        responseRate: 95,
        avgScore: 4.2,
        skippedCount: 5,
        status: 'good',
        responses: [
          { label: 'Definitely', value: 50, color: COLORS[0] },
          { label: 'Probably', value: 25, color: COLORS[1] },
          { label: 'Maybe', value: 15, color: COLORS[2] },
          { label: 'Probably Not', value: 7, color: COLORS[3] },
          { label: 'Definitely Not', value: 3, color: COLORS[4] }
        ]
      },
      {
        question: 'What features would you like to see improved?',
        responseRate: 75,
        avgScore: null,
        skippedCount: 25,
        status: 'warning',
        responses: [
          { label: 'UI/UX', value: 35, color: COLORS[0] },
          { label: 'Performance', value: 25, color: COLORS[1] },
          { label: 'Features', value: 20, color: COLORS[2] },
          { label: 'Integration', value: 15, color: COLORS[3] },
          { label: 'Other', value: 5, color: COLORS[4] }
        ]
      }
    ];
  };

  const questions = calculateQuestionMetrics();

  const toggleQuestion = (question: string) => {
    if (expandedQuestion === question) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(question);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <HelpCircle className="h-5 w-5 text-indigo-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">Question Analytics</h3>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div 
              className="p-4 bg-white cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleQuestion(question.question)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    {question.status === 'warning' ? (
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    )}
                    <h4 className="text-sm font-medium text-gray-900">
                      {question.question}
                    </h4>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Response Rate</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {question.responseRate}%
                      </p>
                    </div>
                    {question.avgScore && (
                      <div>
                        <p className="text-sm text-gray-500">Average Score</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {question.avgScore}/5
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-500">Skipped</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {question.skippedCount}
                      </p>
                    </div>
                  </div>
                </div>
                {expandedQuestion === question.question ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>

            {expandedQuestion === question.question && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-gray-200 bg-gray-50 p-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Bar Chart */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="text-sm font-medium text-gray-900 mb-4">Response Distribution</h5>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={question.responses}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="label" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="value" name="Responses">
                            {question.responses.map((entry, index) => (
                              <Cell key={index} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Pie Chart */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="text-sm font-medium text-gray-900 mb-4">Response Distribution (%)</h5>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={question.responses}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {question.responses.map((entry, index) => (
                              <Cell key={index} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="lg:col-span-2">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="text-sm font-medium text-gray-900 mb-4">Response Trends</h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-indigo-900">Most Common Response</p>
                          <p className="mt-1 text-lg font-semibold text-indigo-600">
                            {question.responses[0].label}
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-green-900">Response Quality</p>
                          <p className="mt-1 text-lg font-semibold text-green-600">
                            {question.status === 'good' ? 'High' : 'Medium'}
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-purple-900">Completion Time</p>
                          <p className="mt-1 text-lg font-semibold text-purple-600">
                            45s avg.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}