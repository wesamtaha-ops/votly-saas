import React from 'react';
import { 
  Globe, 
  Shield, 
  Database, 
  FileDown, 
  Code, 
  Zap 
} from 'lucide-react';

const specs = [
  {
    category: 'Browser Support',
    icon: Globe,
    items: [
      'Chrome 60+',
      'Firefox 60+',
      'Safari 12+',
      'Edge 79+',
      'Opera 47+'
    ]
  },
  {
    category: 'Security Features',
    icon: Shield,
    items: [
      'HTTPS encryption',
      'GDPR compliance',
      'Data encryption at rest',
      'reCAPTCHA integration',
      'Custom SSL certificates'
    ]
  },
  {
    category: 'Data Storage',
    icon: Database,
    items: [
      'Cloud storage',
      'Daily backups',
      'Data retention policies',
      'Geographic redundancy',
      'Data export options'
    ]
  },
  {
    category: 'Export Capabilities',
    icon: FileDown,
    items: [
      'CSV export',
      'Excel export',
      'PDF generation',
      'JSON format',
      'API access'
    ]
  },
  {
    category: 'API Features',
    icon: Code,
    items: [
      'RESTful API',
      'Webhooks',
      'Custom endpoints',
      'API authentication',
      'Rate limiting'
    ]
  },
  {
    category: 'Performance',
    icon: Zap,
    items: [
      '99.9% uptime',
      'Global CDN',
      'Auto-scaling',
      'Load balancing',
      'Response caching'
    ]
  }
];

export function TechnicalSpecs() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Technical Specifications
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Performance and Security
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enterprise-grade infrastructure and security features to keep your data safe and your forms running smoothly.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {specs.map((spec) => (
              <div key={spec.category} className="relative group">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-indigo-200 to-indigo-100 opacity-0 transition duration-200 group-hover:opacity-100 blur-xl" />
                <div className="relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex-none rounded-lg bg-indigo-50 p-2">
                      <spec.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {spec.category}
                    </h3>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {spec.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="flex-none rounded-full w-1.5 h-1.5 bg-indigo-600" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}