import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { pricingTiers } from '@/data/pricing';

export function PricingSection() {
  return (
    <div className="bg-white  sm:py-32">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Start with our free plan and scale as you grow. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ring-1 ${
                tier.mostPopular
                  ? 'bg-gray-900 text-white ring-gray-900 lg:z-10 lg:rounded-l-none lg:rounded-r-none'
                  : 'bg-white text-gray-900 ring-gray-200'
              }`}
            >
              {tier.mostPopular && (
                <p className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-indigo-600 px-3 py-1 text-center text-sm font-medium text-white">
                  Most popular
                </p>
              )}
              <div className="flex flex-col justify-between h-full pt-4">
                <div>
                  <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight">${tier.price}</span>
                    {tier.price > 0 && (
                      <span className={tier.mostPopular ? 'text-gray-300' : 'text-gray-500'}>
                        /month
                      </span>
                    )}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check
                          className={`h-6 w-5 flex-none ${
                            tier.mostPopular ? 'text-indigo-400' : 'text-indigo-600'
                          }`}
                        />
                        <span className={tier.mostPopular ? 'text-gray-300' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={
                    tier.price === 0
                      ? '/signup'
                      : tier.price === 199
                      ? '/contact'
                      : `/signup?plan=${tier.name.toLowerCase()}`
                  }
                  className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}