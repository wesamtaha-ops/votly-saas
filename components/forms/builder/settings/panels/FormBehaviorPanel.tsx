import React from 'react';
import { HelpCircle, Globe, Cookie, ArrowRightLeft, Save, FastForward, BarChart } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';

export function FormBehaviorPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Form behavior</h2>
          <p className="mt-1 text-sm text-gray-500">
            Global settings to control how your form behaves when used
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div className="ml-4">
            <HelpCircle className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {[
          {
            icon: Cookie,
            title: 'Cookie consent',
            description: 'Show cookie consent banner to respondents'
          },
          {
            icon: ArrowRightLeft,
            title: 'Right to left',
            description: 'Enable right-to-left text direction'
          },
          {
            icon: Globe,
            title: 'Disable auto-translate',
            description: 'Prevent browsers from offering to translate your form'
          },
          {
            icon: Save,
            title: 'Allow resuming partial submissions',
            description: 'Let respondents continue from where they left off'
          },
          {
            icon: FastForward,
            title: 'Auto-jump to the next page',
            description: 'Automatically advance to next page when all required fields are filled'
          },
          {
            icon: BarChart,
            title: 'Show progress bar',
            description: 'Display progress indicator for multi-page forms'
          }
        ].map((setting, index) => (
          <div key={index} className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <setting.icon className="h-5 w-5 text-gray-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">
                  {setting.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {setting.description}
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
        ))}
      </div>
    </div>
  );
}