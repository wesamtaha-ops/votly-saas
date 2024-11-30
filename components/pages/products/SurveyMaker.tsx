import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart2,
  Sparkles,
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Layout,
  PieChart,
  FileText,
} from 'lucide-react';

export default function SurveyMaker() {
  const features = [
    {
      title: 'AI-Powered Creation',
      description:
        'Create professional surveys in seconds with our AI assistant',
      icon: Sparkles,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Advanced Analytics',
      description: 'Get deep insights with real-time analytics and reporting',
      icon: BarChart2,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Global Reach',
      description: 'Multilingual surveys with automatic translation',
      icon: Globe,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with GDPR compliance',
      icon: Shield,
      color: 'bg-red-100 text-red-600',
    },
  ];

  const steps = [
    {
      title: 'Choose a Template',
      description: 'Start with a pre-built template or create from scratch',
      icon: Layout,
    },
    {
      title: 'Customize',
      description: 'Add your questions and brand elements',
      icon: FileText,
    },
    {
      title: 'Share & Collect',
      description: 'Distribute your survey and gather responses',
      icon: Users,
    },
    {
      title: 'Analyze Results',
      description: 'Get insights from powerful analytics',
      icon: PieChart,
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                Create Beautiful Surveys in Minutes
              </h1>
              <p className='text-xl mb-8 text-white/90'>
                Powerful survey creation platform with AI assistance, advanced
                analytics, and enterprise-grade security.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Link
                  to='/signup'
                  className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50 transition duration-150'>
                  Get Started Free
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
                <Link
                  to='/templates'
                  className='inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-150'>
                  View Templates
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='relative'>
              <div className='bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='Survey Creator Interface'
                  className='rounded-lg shadow-lg'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Everything You Need to Create Amazing Surveys
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Powerful features to help you create, distribute, and analyze
              surveys with ease
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow'>
                <div
                  className={`${feature.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                  <feature.icon className='h-6 w-6' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <p className='text-xl text-gray-600'>
              Create and launch your survey in four simple steps
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative'>
                <div className='bg-white rounded-xl p-8 shadow-sm relative z-10'>
                  <div className='bg-indigo-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4'>
                    <step.icon className='h-6 w-6 text-indigo-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600'>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2'>
                    <div className='absolute right-0 -top-1.5 h-3 w-3 rounded-full bg-indigo-600' />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='bg-gray-50 py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Trusted by Thousands of Companies
            </h2>
            <p className='text-xl text-gray-600'>
              See what our customers have to say about our survey platform
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                quote:
                  "The AI-powered survey creation has saved us countless hours. It's like having a survey expert on the team.",
                author: 'Sarah Johnson',
                role: 'Marketing Director',
                company: 'TechCorp',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
              {
                quote:
                  'The analytics capabilities are outstanding. We get actionable insights from our survey data instantly.',
                author: 'Michael Chen',
                role: 'Product Manager',
                company: 'InnovateLabs',
                image:
                  'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
              {
                quote:
                  "Best survey platform we've used. The customization options and user experience are unmatched.",
                author: 'Emily Rodriguez',
                role: 'Customer Success',
                company: 'GrowthCo',
                image:
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
            ].map((testimonial) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl p-8 shadow-sm'>
                <div className='flex items-center mb-6'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className='h-12 w-12 rounded-full'
                  />
                  <div className='ml-4'>
                    <div className='font-medium text-gray-900'>
                      {testimonial.author}
                    </div>
                    <div className='text-gray-500'>
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className='text-gray-600 italic'>"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-indigo-600 py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Create Your First Survey?
            </h2>
            <p className='text-xl text-indigo-100 mb-8'>
              Get started for free and upgrade anytime. No credit card required.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                to='/signup'
                className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50 transition duration-150'>
                Start Free Trial
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <Link
                to='/contact'
                className='inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-150'>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
