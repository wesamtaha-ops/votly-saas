import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Stethoscope, GraduationCap, Briefcase, Building, ShoppingBag, Globe, Users, ChevronRight } from 'lucide-react';

export function IndustriesMenu() {
  return (
    <>
      <div className="col-span-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
          POPULAR INDUSTRIES
        </h3>
        <div className="space-y-5">
          {[
            {
              icon: Stethoscope,
              color: 'text-blue-600',
              bg: 'from-blue-50 to-blue-100',
              bgHover: 'from-blue-100 to-blue-200',
              title: 'Healthcare',
              description: 'HIPAA-compliant forms & surveys',
              path: '/industries/healthcare'
            },
            {
              icon: GraduationCap,
              color: 'text-green-600',
              bg: 'from-green-50 to-green-100',
              bgHover: 'from-green-100 to-green-200',
              title: 'Education',
              description: 'Academic forms & assessments',
              path: '/industries/education'
            },
            {
              icon: Building2,
              color: 'text-purple-600',
              bg: 'from-purple-50 to-purple-100',
              bgHover: 'from-purple-100 to-purple-200',
              title: 'Enterprise',
              description: 'Large-scale form solutions',
              path: '/industries/enterprise'
            }
          ].map((industry) => (
            <Link key={industry.title} to={industry.path} className="group block">
              <div className="flex items-center">
                <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${industry.bg} group-hover:${industry.bgHover}`}>
                  <industry.icon className={`h-6 w-6 ${industry.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 group-hover:text-indigo-600">{industry.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{industry.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="col-span-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
          MORE INDUSTRIES
        </h3>
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              icon: Briefcase,
              color: 'text-orange-600',
              bg: 'from-orange-50 to-orange-100',
              bgHover: 'from-orange-100 to-orange-200',
              title: 'HR & Recruiting',
              description: 'Hiring & onboarding'
            },
            {
              icon: Building,
              color: 'text-rose-600',
              bg: 'from-rose-50 to-rose-100',
              bgHover: 'from-rose-100 to-rose-200',
              title: 'Real Estate',
              description: 'Property management'
            },
            {
              icon: ShoppingBag,
              color: 'text-teal-600',
              bg: 'from-teal-50 to-teal-100',
              bgHover: 'from-teal-100 to-teal-200',
              title: 'Retail',
              description: 'Customer feedback'
            },
            {
              icon: Globe,
              color: 'text-cyan-600',
              bg: 'from-cyan-50 to-cyan-100',
              bgHover: 'from-cyan-100 to-cyan-200',
              title: 'Non-Profit',
              description: 'Donation forms'
            }
          ].map((industry) => (
            <Link
              key={industry.title}
              to={`/industries/${industry.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="group block"
            >
              <div className="flex items-center">
                <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${industry.bg} group-hover:${industry.bgHover}`}>
                  <industry.icon className={`h-5 w-5 ${industry.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">{industry.title}</p>
                  <p className="mt-1 text-xs text-gray-500">{industry.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="col-span-4">
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-lg p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4">Success Stories</h3>
          <div className="space-y-4">
            {[
              {
                title: 'How Memorial Hospital improved patient intake by 45%',
                category: 'Healthcare',
                path: '/case-studies/healthcare-patient-intake'
              },
              {
                title: 'University reduces enrollment processing time by 60%',
                category: 'Education',
                path: '/case-studies/education-enrollment'
              }
            ].map((story) => (
              <Link key={story.path} to={story.path} className="block group">
                <p className="text-xs font-medium text-indigo-600 mb-1">{story.category}</p>
                <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                  {story.title}
                </p>
                <div className="mt-2 flex items-center text-sm text-indigo-600">
                  <span className="font-medium">Read case study</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}