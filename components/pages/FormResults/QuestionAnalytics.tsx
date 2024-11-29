import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Switch } from '@radix-ui/react-switch';
import { CheckCircle } from 'lucide-react';
import type { Response } from './types';

interface QuestionAnalyticsProps {
  responses: Response[];
}

interface QuestionData {
  question: string;
  totalResponses: number;
  answeredCount: number;
  averageScore?: number;
  maxScore?: number;
  skipped: number;
  responses: {
    option: string;
    count: number;
    percentage: number;
  }[];
}

const COLORS = ['#4F46E5', '#7C3AED', '#EC4899', '#10B981', '#F59E0B'];

export function QuestionAnalytics({ responses }: QuestionAnalyticsProps) {
  const [showPieChart, setShowPieChart] = useState<Record<string, boolean>>({});

  const questions: QuestionData[] = [
    {
      question: "How satisfied are you with our product?",
      totalResponses: 100,
      answeredCount: 98,
      averageScore: 4.5,
      maxScore: 5,
      skipped: 2,
      responses: [
        { option: "Very Satisfied", count: 60, percentage: 61.2 },
        { option: "Satisfied", count: 28, percentage: 28.6 },
        { option: "Neutral", count: 7, percentage: 7.1 },
        { option: "Dissatisfied", count: 2, percentage: 2 },
        { option: "Very Dissatisfied", count: 1, percentage: 1.1 }
      ]
    },
 {
    question: "How likely are you to recommend our product to others?",
    totalResponses: 90,
    answeredCount: 85,
    averageScore: 8.2,
    maxScore: 10,
    skipped: 5,
    responses: [
      { option: "Very Likely", count: 50, percentage: 58.8 },
      { option: "Somewhat Likely", count: 20, percentage: 23.5 },
      { option: "Neutral", count: 10, percentage: 11.8 },
      { option: "Unlikely", count: 3, percentage: 3.5 },
      { option: "Very Unlikely", count: 2, percentage: 2.4 },
    ],
  },
  {
    question: "How would you rate the quality of our product?",
    totalResponses: 110,
    answeredCount: 105,
    averageScore: 4.3,
    maxScore: 5,
    skipped: 5,
    responses: [
      { option: "Excellent", count: 60, percentage: 57.1 },
      { option: "Good", count: 30, percentage: 28.6 },
      { option: "Average", count: 10, percentage: 9.5 },
      { option: "Poor", count: 3, percentage: 2.9 },
      { option: "Very Poor", count: 2, percentage: 1.9 },
    ],
  },
  {
    question: "How satisfied are you with the delivery experience?",
    totalResponses: 120,
    answeredCount: 115,
    averageScore: 4.0,
    maxScore: 5,
    skipped: 5,
    responses: [
      { option: "Very Satisfied", count: 50, percentage: 43.5 },
      { option: "Satisfied", count: 40, percentage: 34.8 },
      { option: "Neutral", count: 15, percentage: 13 },
      { option: "Dissatisfied", count: 7, percentage: 6.1 },
      { option: "Very Dissatisfied", count: 3, percentage: 2.6 },
    ],
  },
  {
    question: "How would you rate our customer service?",
    totalResponses: 95,
    answeredCount: 90,
    averageScore: 4.7,
    maxScore: 5,
    skipped: 5,
    responses: [
      { option: "Excellent", count: 55, percentage: 61.1 },
      { option: "Good", count: 25, percentage: 27.8 },
      { option: "Average", count: 7, percentage: 7.8 },
      { option: "Poor", count: 2, percentage: 2.2 },
      { option: "Very Poor", count: 1, percentage: 1.1 },
    ],
  },
  {
    question: "How easy was it to use our website or app?",
    totalResponses: 80,
    answeredCount: 75,
    averageScore: 4.8,
    maxScore: 5,
    skipped: 5,
    responses: [
      { option: "Very Easy", count: 50, percentage: 66.7 },
      { option: "Somewhat Easy", count: 20, percentage: 26.7 },
      { option: "Neutral", count: 3, percentage: 4 },
      { option: "Difficult", count: 1, percentage: 1.3 },
      { option: "Very Difficult", count: 1, percentage: 1.3 },
    ],
  },
  {
    question: "How satisfied are you with our pricing?",
    totalResponses: 100,
    answeredCount: 95,
    averageScore: 4.1,
    maxScore: 5,
    skipped: 5,
    responses: [
      { option: "Very Satisfied", count: 40, percentage: 42.1 },
      { option: "Satisfied", count: 35, percentage: 36.8 },
      { option: "Neutral", count: 10, percentage: 10.5 },
      { option: "Dissatisfied", count: 7, percentage: 7.4 },
      { option: "Very Dissatisfied", count: 3, percentage: 3.2 },
    ],
  },
  {
    question: "How helpful was the information provided on our website or app?",
    totalResponses: 85,
    answeredCount: 80,
    averageScore: 4.6,
    maxScore: 5,
    skipped: 5,
    responses: [
      { option: "Very Helpful", count: 45, percentage: 56.3 },
      { option: "Helpful", count: 25, percentage: 31.3 },
      { option: "Neutral", count: 7, percentage: 8.8 },
      { option: "Not Helpful", count: 2, percentage: 2.5 },
      { option: "Very Unhelpful", count: 1, percentage: 1.3 },
    ],
  },  ];

  const toggleChartType = (questionId: string) => {
    setShowPieChart(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="space-y-8">
      {questions.map((question, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          {/* Question Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {question.question}
            </h3>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-8 mb-1">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Response Rate</h4>
              <p className="mt-2 text-xl  text-gray-900">
                {((question.answeredCount / question.totalResponses) * 100).toFixed(0)}%
              </p>
            </div>
            {question.averageScore && (
              <div>
                <h4 className="text-sm font-medium text-gray-500">Average Score</h4>
                <p className="mt-2 text-xl  text-gray-900">
                  {question.averageScore}/{question.maxScore}
                </p>
              </div>
            )}
            <div>
              <h4 className="text-sm font-medium text-gray-500">Skipped</h4>
              <p className="mt-2 text-xl  text-gray-900">
                {question.skipped}
              </p>
            </div>
          </div>

          {/* Chart Toggle */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Pie chart</span>
              <Switch
                checked={showPieChart[index] || false}
                onCheckedChange={() => toggleChartType(index.toString())}
                className="w-11 h-6 bg-gray-200 rounded-full relative inline-flex items-center"
              >
                <span 
                  className={`${
                    showPieChart[index] ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
              </Switch>
            </div>
          </div>

          {/* Response Visualization */}
          {question.answeredCount === 0 && (
            <div className="text-center py-8 text-gray-500">
              No responses yet
            </div>
          )} 
            
             {!showPieChart[index]  && (
            <div className="space-y-4">
              {question.responses.map((response, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm text-gray-600">{response.option}</span>
                  </div>
                  <div className="flex-1 flex items-center space-x-4">
                    <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 flex items-center"
                        style={{ width: `${response.percentage}%` }}
                      >
                        <span className="px-2 text-sm text-white">
                          {response.count} responses
                        </span>
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      <span className="text-sm text-gray-600">
                        {response.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Chart View */}
          {showPieChart[index] && question.answeredCount > 0 && (
            <div className="mt-6 h-64">
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
                    dataKey="count"
                  >
                    {question.responses.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}