import React, { useState } from 'react';
import { HelpCircle, Plus, X, Link as LinkIcon } from 'lucide-react';

interface UrlParameter {
  id: string;
  name: string;
  defaultValue: string;
  description: string;
}

export function UrlParametersPanel() {
  const [parameters, setParameters] = useState<UrlParameter[]>([]);
  const [newParam, setNewParam] = useState({
    name: '',
    defaultValue: '',
    description: ''
  });

  const handleAddParameter = () => {
    if (newParam.name) {
      setParameters([
        ...parameters,
        {
          id: Date.now().toString(),
          name: newParam.name,
          defaultValue: newParam.defaultValue,
          description: newParam.description
        }
      ]);
      setNewParam({ name: '', defaultValue: '', description: '' });
    }
  };

  const handleRemoveParameter = (id: string) => {
    setParameters(parameters.filter(param => param.id !== id));
  };

  const handleQuickAdd = (paramName: string) => {
    if (!parameters.some(p => p.name === paramName)) {
      setParameters([
        ...parameters,
        {
          id: Date.now().toString(),
          name: paramName,
          defaultValue: '',
          description: `Pre-fill the ${paramName} field`
        }
      ]);
    }
  };

  const generateExampleUrl = () => {
    const baseUrl = 'https://example.com/form';
    if (parameters.length === 0) return baseUrl;

    const params = parameters
      .map(p => `${p.name}=${p.defaultValue || '{value}'}`)
      .join('&');
    return `${baseUrl}?${params}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">URL parameters</h2>
          <p className="mt-1 text-sm text-gray-500">
            Personalize your form to the person filling it out, or pre-fill fields with URL parameters.
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parameter Name
            </label>
            <input
              type="text"
              value={newParam.name}
              onChange={e => setNewParam({ ...newParam, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="e.g., email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Default Value
            </label>
            <input
              type="text"
              value={newParam.defaultValue}
              onChange={e => setNewParam({ ...newParam, defaultValue: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Default value (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              value={newParam.description}
              onChange={e => setNewParam({ ...newParam, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="What this parameter is used for"
            />
          </div>

          <button
            onClick={handleAddParameter}
            disabled={!newParam.name}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Parameter
          </button>
        </div>

        {parameters.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Current Parameters</h3>
            <div className="space-y-4">
              {parameters.map(param => (
                <div
                  key={param.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="flex items-center">
                      <LinkIcon className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="font-medium text-gray-900">{param.name}</span>
                    </div>
                    {param.defaultValue && (
                      <p className="mt-1 text-sm text-gray-500">
                        Default: {param.defaultValue}
                      </p>
                    )}
                    {param.description && (
                      <p className="mt-1 text-sm text-gray-500">
                        {param.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemoveParameter(param.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Example URL</h4>
              <code className="text-sm text-gray-600 break-all">
                {generateExampleUrl()}
              </code>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Quick Add</h3>
          <div className="flex flex-wrap gap-2">
            {['name', 'email', 'company', 'phone', 'role'].map((param) => (
              <button
                key={param}
                onClick={() => handleQuickAdd(param)}
                className="inline-flex items-center px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
              >
                {param}
                <Plus className="h-4 w-4 ml-1" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}