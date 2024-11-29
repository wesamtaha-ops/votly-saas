import React from 'react';
import { X } from 'lucide-react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';

interface FormPreviewProps {
  survey: Model | null;
  onClose: () => void;
}

export function FormPreview({ survey, onClose }: FormPreviewProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Fixed Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Form Preview</h2>
          <button
            onClick={onClose}
            className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <X className="h-4 w-4 mr-2" />
            Close Preview
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto">
            {survey && (
              <div className="survey-preview">
                <Survey model={survey} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}