import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  questions: number;
}

interface Category {
  name: string;
  count: number;
  slug: string;
}

const categories: Category[] = [
  { name: 'Application forms', count: 29, slug: 'application' },
  { name: 'Appointment forms', count: 11, slug: 'appointment' },
  { name: 'Booking forms', count: 17, slug: 'booking' },
  { name: 'Calculation forms', count: 12, slug: 'calculation' },
  { name: 'Checklist forms', count: 7, slug: 'checklist' },
  { name: 'Consent forms', count: 9, slug: 'consent' },
  { name: 'Consultation forms', count: 6, slug: 'consultation' },
  { name: 'Contact forms', count: 15, slug: 'contact' },
  { name: 'Content forms', count: 2, slug: 'content' },
  { name: 'Donation forms', count: 3, slug: 'donation' },
  { name: 'Enrollment forms', count: 6, slug: 'enrollment' },
];

const templates: Template[] = [
  {
    id: 'daily-report',
    title: 'Daily Report Template',
    description:
      'A daily work report form is a tool for employees to provide a brief summary of their daily activities, progress, and any challenges encountered.',
    category: 'Reports',
    image:
      'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    questions: 5,
  },
  {
    id: 'employee-evaluation',
    title: 'Employee Self Evaluation Template',
    description:
      'An employee self-evaluation form is a document that allows employees to assess their own performance, achievements, and areas for improvement.',
    category: 'HR',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    questions: 8,
  },
  {
    id: 'job-application',
    title: 'Job Application Form Template',
    description:
      'A job application form is a document used by employers to gather information from potential candidates during the hiring process.',
    category: 'HR',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    questions: 12,
  },
];

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || template.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Guide Section */}
        <div className="mb-8 lg:mb-12 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-4 sm:p-8 rounded-2xl shadow-lg border border-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  <Sparkles className="h-4 w-4 mr-2" />
                  New: AI-Powered Form Creation
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Create Forms in Minutes
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                  Choose from our curated collection of templates or let our AI engine create, and publish with ease.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/forms/ai-create"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Try AI Form Creator
                  </Link>
                  <Link
                    to="/forms/new"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition duration-300 border border-indigo-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    Start from Scratch
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search and Filter */}
        <div className="lg:hidden mb-6 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search templates"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50"
          >
            {isSidebarOpen ? 'Hide Categories' : 'Show Categories'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="sticky top-8 space-y-6">
              <div className="hidden lg:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search templates"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg ${
                        selectedCategory === category.name
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredTemplates.map((template) => (
                <Link
                  key={template.id}
                  to={`/forms/new?template=${template.id}`}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {template.title}
                      </h3>
                      <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2">
                        {template.questions} questions
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {template.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {template.category}
                      </span>
                      <span className="text-indigo-600 group-hover:text-indigo-700 flex items-center text-sm font-medium">
                        Use template
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-full mb-4">
                  <Search className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter to find what you're looking for
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}