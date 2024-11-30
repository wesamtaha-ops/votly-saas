import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, UserPlus, ClipboardList, CreditCard, Users, FileText } from 'lucide-react';

const useCases = [
  {
    title: 'Contact Forms',
    description: 'Professional contact forms with spam protection and instant notifications.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/templates/contact'
  },
  {
    title: 'Registration Forms',
    description: 'Streamlined registration process for events, courses, and memberships.',
    icon: UserPlus,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/templates/registration'
  },
  {
    title: 'Survey Forms',
    description: 'Comprehensive surveys with advanced logic and analytics.',
    icon: ClipboardList,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/templates/survey'
  },
  {
    title: 'Payment Forms',
    description: 'Secure payment collection with multiple gateway options.',
    icon: CreditCard,
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/templates/payment'
  },
  {
    title: 'Lead Generation',
    description: 'Convert visitors into leads with optimized forms.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
    link: '/templates/lead-generation'
  },
  {
    title: 'Application Forms',
    description: 'Collect and process applications efficiently.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/templates/application'
  }
];

export function UseCases() {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Use Cases
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perfect for Every Need
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From simple contact forms to complex surveys, our form builder adapts to your requirements.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              to={useCase.link}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
            >
              <img
                src={useCase.image}
                alt={useCase.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <useCase.icon className="h-5 w-5 flex-none text-white" />
                <div className="ml-2">{useCase.title}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {useCase.description}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}