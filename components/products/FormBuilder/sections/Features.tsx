import React from 'react';
import { 
  MousePointerClick, 
  LayoutTemplate, 
  GitFork, 
  Shield, 
  Smartphone,
  Upload,
  Layers,
  CreditCard
} from 'lucide-react';

const features = [
  {
    name: 'Drag-and-Drop Interface',
    description: 'Build forms intuitively by dragging and dropping elements exactly where you want them.',
    icon: MousePointerClick,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Pre-built Templates',
    description: 'Start with professionally designed templates and customize them to your needs.',
    icon: LayoutTemplate,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    name: 'Conditional Logic',
    description: 'Create dynamic forms that adapt based on user responses.',
    icon: GitFork,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Advanced Security',
    description: 'Enterprise-grade security with encryption and compliance features.',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    name: 'Mobile Responsive',
    description: 'Forms that look and work perfectly on any device.',
    icon: Smartphone,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    name: 'File Uploads',
    description: 'Securely collect files and documents from your users.',
    icon: Upload,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    name: 'Multi-Page Forms',
    description: 'Break long forms into manageable sections with progress tracking.',
    icon: Layers,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    name: 'Payment Integration',
    description: 'Accept payments securely with popular payment gateways.',
    icon: CreditCard,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create amazing forms
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our form builder comes packed with all the features you need to create professional forms that convert.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="group relative transform hover:-translate-y-1 transition-all duration-300">
                <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r from-${feature.color} to-${feature.bgColor} opacity-25 blur transition duration-300 group-hover:opacity-50`} />
                <div className="relative flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm ring-1 ring-inset ring-gray-200">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} ${feature.color}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}