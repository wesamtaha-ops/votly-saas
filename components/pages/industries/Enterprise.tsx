import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2,
  Shield,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Settings,
  Database,
  Lock,
  Zap,
  LineChart,
  Network
} from 'lucide-react';

export default function Enterprise() {
  const features = [
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO and role-based access control',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights and custom reporting capabilities',
      icon: LineChart,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Global Deployment',
      description: 'Multi-language support and regional data compliance',
      icon: Globe,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with your existing systems',
      icon: Network,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const capabilities = [
    {
      title: 'Custom Workflows',
      description: 'Design and automate complex business processes',
      icon: Settings
    },
    {
      title: 'Data Management',
      description: 'Centralized data storage with advanced security',
      icon: Database
    },
    {
      title: 'Team Collaboration',
      description: 'Enhanced team productivity and coordination',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiPjxwYXRoIGQ9Ik0zNiAzNGgxMnYxMkgzNnpNMTIgMzRoMTJ2MTJIMTIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-white mb-6">
                <Building2 className="h-4 w-4 mr-2" />
                Enterprise Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise-Grade Form Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Secure, scalable, and customizable form solutions designed for enterprise needs.
                Built to handle your organization's complexity and scale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-50 transition duration-150"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/templates/enterprise"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-150"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Ready Features
            </h2>
            <p className="text-xl text-gray-600">
              Built to meet the demands of large organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${feature.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Advanced Security',
                    description: 'SOC 2 Type II certified with end-to-end encryption',
                    icon: Lock,
                  },
                  {
                    title: 'Custom Integration',
                    description: 'Seamless integration with your existing systems',
                    icon: Settings,
                  },
                  {
                    title: 'Scalable Infrastructure',
                    description: 'Built to handle millions of form submissions',
                    icon: Database,
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <item.icon className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Enterprise Security"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for large organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <capability.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Enterprise-Grade Forms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your organization's form needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-50 transition duration-150"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/enterprise/demo"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-150"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}