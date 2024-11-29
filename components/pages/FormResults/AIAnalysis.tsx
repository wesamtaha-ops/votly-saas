import React from 'react';
import { Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { Response } from './types';

interface AIAnalysisProps {
  responses: Response[];
  showAIAnalysis: boolean;
  setShowAIAnalysis: (show: boolean) => void;
}

export function AIAnalysis({ responses, showAIAnalysis, setShowAIAnalysis }: AIAnalysisProps) {
  // Calculate sentiment distribution
  const calculateSentimentDistribution = () => {
    const distribution = {
      positive: 0,
      neutral: 0,
      negative: 0
    };

    responses.forEach(response => {
      if (response.sentiment) {
        distribution[response.sentiment.toLowerCase() as keyof typeof distribution]++;
      }
    });

    const total = responses.length || 1; // Avoid division by zero
    return {
      positive: ((distribution.positive / total) * 100).toFixed(1),
      neutral: ((distribution.neutral / total) * 100).toFixed(1),
      negative: ((distribution.negative / total) * 100).toFixed(1)
    };
  };

  // Mock language distribution data
  const languageData = [
    { language: 'English', count: 75 },
    { language: 'Spanish', count: 15 },
    { language: 'French', count: 10 }
  ];

  const sentimentDistribution = calculateSentimentDistribution();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-indigo-600" />
          <h3 className="text-lg font-medium text-gray-900">AI Analysis</h3>
        </div>
        <button
          onClick={() => setShowAIAnalysis(!showAIAnalysis)}
          className="text-sm text-indigo-600 hover:text-indigo-700"
        >
          {showAIAnalysis ? 'Hide Analysis' : 'Show Analysis'}
        </button>
      </div>

      {showAIAnalysis && (
        <div className="space-y-6">
          {/* Sentiment Analysis */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Sentiment Analysis</h4>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(sentimentDistribution).map(([sentiment, percentage]) => (
                <div key={sentiment} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {percentage}%
                  </div>
                  <div className="text-sm text-gray-500 capitalize">
                    {sentiment}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Distribution */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Language Distribution</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={languageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="language" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
            <h4 className="text-lg font-semibold mb-4">Key Insights</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Most responses are positive (75%)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Average completion time: 2m 34s
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                Common keywords: "excellent", "helpful", "easy to use"
              </li>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}