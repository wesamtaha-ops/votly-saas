import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Share2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { FormOptionsDropdown } from './FormOptionsDropdown';
import { Form } from '@/types';

interface FormListProps {
  forms: Form[];
  onShare: (formId: string) => void;
  onOptionsClick: (formId: string) => void;
  onClosingOptions: (formId: string) => void;
  onStatusChange: (formId: string, status: 'live' | 'draft' | 'closed') => void;
}

export function FormList({ forms, onShare, onOptionsClick, onClosingOptions, onStatusChange }: FormListProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Form Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Responses
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Updated
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Completion Rate
            </th>
            <th className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {forms.map((form) => (
            <tr key={form.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{form.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge 
                  status={form.status} 
                  onStatusChange={(newStatus) => onStatusChange(form.id, newStatus)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {form.responses}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {form.lastUpdated}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${form.completionRate}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">{form.completionRate}%</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-4">
                  <Link
                    to={`/forms/${form.id}/results`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <BarChart2 className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => onShare(form.id)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  <FormOptionsDropdown 
                    onEdit={() => onOptionsClick(form.id)}
                    onClosingOptions={() => onClosingOptions(form.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}