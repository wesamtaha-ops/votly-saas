import React from 'react';
import { Clock, Code, Layout, Zap, Database, Share2 } from 'lucide-react';

const benefits = [
  {
    title: 'Save Time and Money',
    description: 'Build forms in minutes instead of hours. No need to hire developers or designers.',
    icon: Clock,
  },
  {
    title: 'No Coding Required',
    description: 'Our intuitive interface means anyone can create professional forms without writing code.',
    icon: Code,
  },
  {
    title: 'Professional Design',
    description: 'Every form looks great out of the box with our carefully crafted templates and themes.',
    icon: Layout,
  },
  {
    title: 'Better User Experience',
    description: 'Smart features like conditional logic and validation create a smooth experience for your users.',
    icon: Zap,
  },
  {
    title: 'Improved Data Collection',
    description: 'Structured data collection with validation and custom fields for better quality responses.',
    icon: Database,
  },
  {
    title: 'Easy Integration',
    description: 'Connect your forms with your favorite tools through our extensive integration options.',
    icon: Share2,
  },
];

export function Benefits() {
  return (
    <div className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Form Builder?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how our form builder can transform your data collection process and improve your workflow.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative group">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-indigo-500/25 to-purple-500/25 opacity-0 blur transition duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col items-start">
                  <div className="rounded-lg bg-white p-2 ring-1 ring-gray-900/10">
                    <benefit.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}