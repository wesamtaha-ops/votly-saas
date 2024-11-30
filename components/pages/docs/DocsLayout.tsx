import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Book,
  FileText,
  Settings,
  Database,
  Code,
  Zap,
  Users,
  Lock,
  Globe,
  Search,
} from 'lucide-react';

interface DocSection {
  title: string;
  icon: React.ElementType;
  items: {
    id: string;
    title: string;
    href: string;
  }[];
}

const sections: DocSection[] = [
  {
    title: 'Getting Started',
    icon: Book,
    items: [
      { id: 'introduction', title: 'Introduction', href: '/docs/introduction' },
      {
        id: 'quickstart',
        title: 'Quick Start Guide',
        href: '/docs/quickstart',
      },
      { id: 'concepts', title: 'Core Concepts', href: '/docs/concepts' },
    ],
  },
  {
    title: 'Form Building',
    icon: FileText,
    items: [
      { id: 'form-basics', title: 'Form Basics', href: '/docs/form-basics' },
      {
        id: 'question-types',
        title: 'Question Types',
        href: '/docs/question-types',
      },
      { id: 'logic-rules', title: 'Logic & Rules', href: '/docs/logic-rules' },
      { id: 'validation', title: 'Validation', href: '/docs/validation' },
    ],
  },
  {
    title: 'AI Features',
    icon: Zap,
    items: [
      { id: 'ai-forms', title: 'AI Form Generation', href: '/docs/ai-forms' },
      {
        id: 'ai-analysis',
        title: 'AI Response Analysis',
        href: '/docs/ai-analysis',
      },
      { id: 'ai-insights', title: 'AI Insights', href: '/docs/ai-insights' },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    items: [
      { id: 'responses', title: 'Managing Responses', href: '/docs/responses' },
      {
        id: 'analytics',
        title: 'Analytics Dashboard',
        href: '/docs/analytics',
      },
      { id: 'exports', title: 'Data Export', href: '/docs/exports' },
    ],
  },
  {
    title: 'Integration',
    icon: Code,
    items: [
      { id: 'api', title: 'API Reference', href: '/docs/api' },
      { id: 'webhooks', title: 'Webhooks', href: '/docs/webhooks' },
      { id: 'embed', title: 'Embedding Forms', href: '/docs/embed' },
    ],
  },
  {
    title: 'Security',
    icon: Lock,
    items: [
      { id: 'security', title: 'Security Overview', href: '/docs/security' },
      { id: 'privacy', title: 'Privacy Controls', href: '/docs/privacy' },
      { id: 'compliance', title: 'Compliance', href: '/docs/compliance' },
    ],
  },
];

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Search Header */}
      <div className='sticky top-0 z-10 bg-white border-b border-gray-200'>
        <div className='max-w-8xl mx-auto'>
          <div className='py-4 px-4 sm:px-6 lg:px-8'>
            <div className='relative max-w-md mx-auto'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
              <input
                type='text'
                placeholder='Search documentation...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex'>
          {/* Sidebar */}
          <div className='hidden lg:block fixed lg:flex-shrink-0'>
            <div className='h-[calc(100vh-4rem)] w-64 overflow-y-auto py-6 pr-8'>
              <nav className='space-y-8'>
                {sections.map((section) => (
                  <div key={section.title}>
                    <div className='flex items-center mb-3'>
                      <section.icon className='h-5 w-5 text-gray-400' />
                      <h5 className='ml-2 text-sm font-semibold text-gray-900'>
                        {section.title}
                      </h5>
                    </div>
                    <ul className='space-y-2'>
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <Link
                            to={item.href}
                            className={`block px-3 py-2 text-sm rounded-md ${
                              location.pathname === item.href
                                ? 'bg-indigo-50 text-indigo-600'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:pl-72'>
            <div className='max-w-3xl mx-auto pt-10 pb-16'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
