import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Limited surveys and respondents',
      'Basic question types',
      'Email verification',
      'Basic security features',
      'Limited reporting (Excel, CSV)',
    ],
    cta: 'Start for free',
    mostPopular: false,
  },
  {
    name: 'Basic',
    price: 49,
    features: [
      'Unlimited surveys & respondents',
      'Advanced question types and logic',
      'Email/SMS campaigns',
      'A/B testing',
      'Social media links, custom email templates',
      'Enhanced reporting (Bar/Pie Charts, Cross-tab, Excel export)',
    ],
    cta: 'Start free trial',
    mostPopular: true,
  },
  {
    name: 'Advanced',
    price: 99,
    features: [
      'Full survey logic',
      'AI-generated questions',
      'Conversational questions',
      'Full reporting suite',
      'Multi-language (2 languages)',
      'SMS/Email with A/B testing',
      'TURF & NPS analysis',
    ],
    cta: 'Start free trial',
    mostPopular: false,
  },
  {
    name: 'Premium',
    price: 199,
    features: [
      'All features unlocked',
      'Unlimited users & languages',
      'Advanced integrations',
      'Dynamic real-time reporting',
      'Role-based access control',
      'Full API access',
      'GDPR compliance',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto text-indigo-100">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg ring-1 ${
                tier.mostPopular
                  ? 'ring-indigo-600 scale-105 z-10'
                  : 'ring-gray-200'
              }`}
            >
              {tier.mostPopular && (
                <p className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-indigo-600 px-3 py-1 text-center text-sm font-medium text-white">
                  Most popular
                </p>
              )}
              <div className="p-8">
                <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">${tier.price}</span>
                  {tier.price > 0 && (
                    <span className="text-gray-500">/month</span>
                  )}
                </p>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className={`h-6 w-5 flex-none ${
                          tier.mostPopular ? 'text-indigo-600' : 'text-gray-600'
                        }`}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={tier.price === 0 ? '/signup' : tier.price === 199 ? '/contact' : `/signup?plan=${tier.name.toLowerCase()}`}
                  className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-center mb-8">Compare Plan Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-t border-gray-200">
                    <th className="py-5 px-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    {tiers.map((tier) => (
                      <th key={tier.name} className="px-4 py-5 text-left text-sm font-semibold text-gray-900">
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-5 px-4 text-sm text-gray-500">Survey Creation</td>
                    <td className="px-4 py-5 text-sm">Basic</td>
                    <td className="px-4 py-5 text-sm">Advanced</td>
                    <td className="px-4 py-5 text-sm">Full Logic</td>
                    <td className="px-4 py-5 text-sm">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 text-sm text-gray-500">Response Limit</td>
                    <td className="px-4 py-5 text-sm">100/mo</td>
                    <td className="px-4 py-5 text-sm">Unlimited</td>
                    <td className="px-4 py-5 text-sm">Unlimited</td>
                    <td className="px-4 py-5 text-sm">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 text-sm text-gray-500">Question Types</td>
                    <td className="px-4 py-5 text-sm">Basic</td>
                    <td className="px-4 py-5 text-sm">Advanced</td>
                    <td className="px-4 py-5 text-sm">All Types</td>
                    <td className="px-4 py-5 text-sm">Custom Types</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 text-sm text-gray-500">AI Features</td>
                    <td className="px-4 py-5 text-sm">—</td>
                    <td className="px-4 py-5 text-sm">Basic</td>
                    <td className="px-4 py-5 text-sm">Advanced</td>
                    <td className="px-4 py-5 text-sm">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 text-sm text-gray-500">Analytics</td>
                    <td className="px-4 py-5 text-sm">Basic</td>
                    <td className="px-4 py-5 text-sm">Enhanced</td>
                    <td className="px-4 py-5 text-sm">Advanced</td>
                    <td className="px-4 py-5 text-sm">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}