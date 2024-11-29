import React, { useState } from 'react';
import { 
  Search, Book, MessageCircle, Phone, 
  ChevronRight, ExternalLink, Mail,
  Zap, Shield, Brain, Sparkles, Code,
  Database, Globe, Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Mock data for guides
const guides = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of creating forms and surveys',
    icon: Book,
    link: '/docs/getting-started',
    category: 'Basics'
  },
  {
    title: 'Form Logic',
    description: 'Advanced form logic and conditional branching',
    icon: Brain,
    link: '/docs/form-logic',
    category: 'Advanced'
  },
  {
    title: 'Response Analysis',
    description: 'Understanding form responses and analytics',
    icon: Database,
    link: '/docs/analytics',
    category: 'Analytics'
  },
  {
    title: 'AI Features',
    description: 'Leveraging AI to create better forms',
    icon: Sparkles,
    link: '/docs/ai-features',
    category: 'Advanced'
  },
  {
    title: 'API Integration',
    description: 'Connect your forms with other services',
    icon: Code,
    link: '/docs/api',
    category: 'Development'
  },
  {
    title: 'Team Collaboration',
    description: 'Work together on forms and surveys',
    icon: Users,
    link: '/docs/collaboration',
    category: 'Teams'
  }
];

// Mock data for FAQs
const faqs = [
  {
    question: 'How do I create my first form?',
    answer: 'Click the "Create Form" button in your dashboard and choose from our templates or start from scratch.',
    category: 'Getting Started'
  },
  {
    question: 'Can I export my form responses?',
    answer: 'Yes, you can export responses in multiple formats including CSV, Excel, and PDF.',
    category: 'Data Export'
  },
  {
    question: 'How do I share my form?',
    answer: 'After creating your form, click the "Share" button to get a shareable link or embed code.',
    category: 'Sharing'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HelpAndSupport() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredGuides = guides.filter(guide => 
    (selectedCategory === 'all' || guide.category === selectedCategory) &&
    (guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     guide.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredFaqs = faqs.filter(faq =>
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-lg mb-4">
            <Zap className="h-6 w-6 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers, documentation, and support to help you succeed with Formify
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search documentation and FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Quick Links */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: 'Documentation',
              description: 'Comprehensive guides and tutorials',
              icon: Book,
              action: 'Browse docs',
              link: '/docs',
              color: 'bg-blue-50 text-blue-600'
            },
            {
              title: 'Live Chat',
              description: 'Get instant help from our team',
              icon: MessageCircle,
              action: 'Start chat',
              onClick: () => console.log('Start chat'),
              color: 'bg-green-50 text-green-600'
            },
            {
              title: 'Premium Support',
              description: 'Priority support for premium users',
              icon: Shield,
              action: 'Contact us',
              onClick: () => console.log('Contact support'),
              color: 'bg-purple-50 text-purple-600'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="ml-4 text-xl font-semibold text-gray-900">{item.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{item.description}</p>
              {item.link ? (
                <a
                  href={item.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  {item.action}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  {item.action}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Popular Guides */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide, index) => (
              <motion.a
                key={guide.title}
                href={guide.link}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <guide.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{guide.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center text-indigo-600 font-medium">
                  Learn more
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 mb-4">{faq.answer}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600">
                  {faq.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl mb-10 text-white/90">
              Our support team is available 24/7 to help you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:support@formify.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:bg-opacity-90 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </a>
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-400 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Live Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}