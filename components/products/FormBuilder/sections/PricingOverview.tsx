import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 forms',
      '100 responses per month',
      'Basic form elements',
      'Email notifications',
      'Export to CSV'
    ],
    cta: 'Start Free',
    href: '/signup'
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Great for professionals and growing businesses',
    features: [
      'Unlimited forms',
      '10,000 responses per month',
      'Advanced form elements',
      'File uploads',
      'Custom branding',
      'Priority support',
      'API access'
    ],
    cta: 'Start Free Trial',
    href: '/signup?plan=pro',
    mostPopular: true
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited everything',
      'Custom integrations',
      'SLA guarantee',
      'Dedicated support',
      'Custom security features',
      'On-premise deployment',
      'Advanced analytics'
    ],
    cta: 'Contact Sales',
    href: '/contact'
  }
];

export function PricingOverview() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.name}
              className={`p-8 ${
                tierIdx === 1
                  ? 'bg-gray-900 sm:px-10 lg:flex-auto'
                  : 'bg-white lg:flex-auto'
              } ${tierIdx === 0 ? 'rounded-t-3xl lg:rounded-l-3xl' : ''} ${
                tierIdx === tiers.length - 1 ? 'rounded-b-3xl lg:rounded-r-3xl' : ''
              }`}
            >
              <h3
                className={`text-2xl font-bold tracking-tight ${
                  tierIdx === 1 ? 'text-white' : 'text-gray-900'
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-6 text-base leading-7 ${
                  tierIdx === 1 ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.description}
              </p>
              <div className="mt-8 flex items-baseline gap-x-2">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tierIdx === 1 ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  ${tier.price}
                </span>
                {tier.price > 0 && (
                  <span
                    className={
                      tierIdx === 1 ? 'text-gray-300' : 'text-gray-600'
                    }
                  >
                    /month
                  </span>
                )}
              </div>
              <Link
                to={tier.href}
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tierIdx === 1
                    ? 'bg-white text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-white'
                    : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                }`}
              >
                {tier.cta}
              </Link>
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tierIdx === 1 ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tierIdx === 1 ? 'text-white' : 'text-indigo-600'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}