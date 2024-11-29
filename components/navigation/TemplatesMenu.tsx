import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, ClipboardCheck, BrainCircuit, Users, 
  Building2, GraduationCap, ChevronRight, Briefcase,
  Search, TrendingUp
} from 'lucide-react';

const categories = [
  {
    icon: Users,
    color: 'text-blue-600',
    bg: 'from-blue-50 to-blue-100',
    bgHover: 'from-blue-100 to-blue-200',
    title: 'Customer Feedback',
    description: 'Surveys and feedback forms',
    count: 24,
    path: '/templates/customer-feedback'
  },
  {
    icon: Building2,
    color: 'text-purple-600',
    bg: 'from-purple-50 to-purple-100',
    bgHover: 'from-purple-100 to-purple-200',
    title: 'Business Operations',
    description: 'Internal processes and workflows',
    count: 18,
    path: '/templates/business'
  },
  {
    icon: GraduationCap,
    color: 'text-green-600',
    bg: 'from-green-50 to-green-100',
    bgHover: 'from-green-100 to-green-200',
    title: 'Education',
    description: 'Learning and assessment forms',
    count: 15,
    path: '/templates/education'
  }
];

const popularTemplates = [
  {
    title: 'Customer Satisfaction Survey',
    category: 'Customer Feedback',
    uses: '2.3k',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Job Application Form',
    category: 'HR',
    uses: '1.8k',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Event Registration',
    category: 'Events',
    uses: '1.5k',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

export function TemplatesMenu() {
  return (
    <>
      <div className="col-span-4">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
          POPULAR CATEGORIES
        </h3>
        <div className="space-y-5">
          {categories.map((category) => (
            <Link key={category.title} to={category.path} className="group block">
              <div className="flex items-center">
                <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${category.bg} group-hover:${category.bgHover}`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-gray-900 group-hover:text-indigo-600">{category.title}</p>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="col-span-5">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
          MOST USED TEMPLATES
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {popularTemplates.map((template) => (
            <Link 
              key={template.title}
              to={`/templates/${template.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block"
            >
              <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-3">
                <img 
                  src={template.image}
                  alt={template.title}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                    {template.category}
                  </span>
                </div>
              </div>
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                {template.title}
              </h4>
              <div className="mt-1 flex items-center text-xs text-gray-500">
                <TrendingUp className="h-4 w-4 mr-1" />
                {template.uses} uses
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/templates"
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Browse all templates
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="col-span-3">
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-lg p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4">Create Custom Template</h3>
          <p className="text-sm text-gray-500 mb-4">
            Need a specialized template? Create your own or let our AI help you design the perfect form.
          </p>
          <div className="space-y-3">
            <Link
              to="/templates/create"
              className="block group"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-white/60 group-hover:bg-white">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                    Create from Scratch
                  </p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/templates/ai-create"
              className="block group"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-white/60 group-hover:bg-white">
                  <BrainCircuit className="h-5 w-5 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                    AI Template Generator
                  </p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}