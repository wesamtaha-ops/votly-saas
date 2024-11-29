import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Share2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { FormOptionsDropdown } from './FormOptionsDropdown';
import { Form } from '@/types';

interface FormCardProps {
  form: Form;
  onShare: () => void;
  onOptionsClick: () => void;
  onClosingOptions: () => void;
  onStatusChange: (status: 'live' | 'draft' | 'closed') => void;
}

export function FormCard({ form, onShare, onOptionsClick, onClosingOptions, onStatusChange }: FormCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{form.name}</h3>
            <div className="mt-1 flex items-center">
              <StatusBadge 
                status={form.status} 
                onStatusChange={onStatusChange}
              />
              <span className="ml-2 text-sm text-gray-500">
                {form.responses} responses
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onShare}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <FormOptionsDropdown 
              onEdit={onOptionsClick}
              onClosingOptions={onClosingOptions}
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Last updated {form.lastUpdated}</span>
            <span>{form.completionRate}% completion</span>
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${form.completionRate}%` }}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Link
            to={`/forms/${form.id}/results`}
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700"
          >
            <BarChart2 className="h-4 w-4 mr-1" />
            View Results
          </Link>
          <span className="text-sm text-gray-500">
            Avg. time: {form.avgResponseTime}
          </span>
        </div>
      </div>
    </div>
  );
}