import React from 'react';
import { HelpCircle, Calendar, Hash, Lock } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';

export function AccessPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Access</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage when your form is open or closed.
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Lock className="h-5 w-5 text-gray-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">
                Close form
              </h3>
              <p className="text-sm text-gray-500">
                Close your form to new submissions.
              </p>
            </div>
          </div>
          <Switch.Root 
            className="w-11 h-6 bg-gray-200 rounded-full data-[state=checked]:bg-indigo-600"
          >
            <Switch.Thumb 
              className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-1 data-[state=checked]:translate-x-6" 
            />
          </Switch.Root>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">
                Form open date
              </h3>
              <p className="text-sm text-gray-500">
                Set a date for your form to become available
              </p>
            </div>
          </div>
          <Switch.Root 
            className="w-11 h-6 bg-gray-200 rounded-full data-[state=checked]:bg-indigo-600"
          >
            <Switch.Thumb 
              className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-1 data-[state=checked]:translate-x-6" 
            />
          </Switch.Root>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">
                Form expiration date
              </h3>
              <p className="text-sm text-gray-500">
                Close form upon reaching a certain date
              </p>
            </div>
          </div>
          <Switch.Root 
            className="w-11 h-6 bg-gray-200 rounded-full data-[state=checked]:bg-indigo-600"
          >
            <Switch.Thumb 
              className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-1 data-[state=checked]:translate-x-6" 
            />
          </Switch.Root>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Hash className="h-5 w-5 text-gray-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">
                Form submission limit
              </h3>
              <p className="text-sm text-gray-500">
                Close form upon reaching a certain number of submissions
              </p>
            </div>
          </div>
          <Switch.Root 
            className="w-11 h-6 bg-gray-200 rounded-full data-[state=checked]:bg-indigo-600"
          >
            <Switch.Thumb 
              className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-1 data-[state=checked]:translate-x-6" 
            />
          </Switch.Root>
        </div>
      </div>
    </div>
  );
}