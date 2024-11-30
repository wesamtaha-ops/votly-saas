import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag,
  BarChart2,
  Users,
  ClipboardList,
  ArrowRight,
  Star,
  Truck,
  Store,
  Package,
  Smartphone,
  MessageSquare,
  Zap
} from 'lucide-react';

export default function Retail() {
  const features = [
    {
      title: 'Customer Feedback',
      description: 'Collect and analyze customer feedback and satisfaction data',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Order Management',
      description: 'Streamline order processing and returns handling',
      icon: Package,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Inventory Tracking',
      description: 'Digital forms for inventory counts and management',
      icon: ClipboardList,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Store Audits',
      description: 'Mobile-friendly store inspection and audit forms',
      icon: Store,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const useCases = [
    {
      title: 'Customer Experience',
      description: 'Improve customer satisfaction with feedback forms',
      icon: Users,
      stats: '35% higher satisfaction'
    },
    {
      title: 'Store Operations',
      description: 'Streamline daily store operations and reporting',
      icon: Store,
      stats: '40% time saved'
    },
    {
      title: 'Supply Chain',
      description: 'Optimize inventory and supplier management',
      icon: Truck,
      stats: '25% less stockouts'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiPjxwYXRoIGQ9Ik0zNiAzNGgxMnYxMkgzNnpNMTIgMzRoMTJ2MTJIMTIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-orange-500/20 text-white mb-6">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Retail Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Forms for Modern Retail
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Streamline retail operations, improve customer experience, and boost efficiency
                with powerful digital forms and surveys.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-orange-50 transition duration-150"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/templates/retail"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-150"
                >
                  View Templates
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
              Built for Retail Operations
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools to manage every aspect of your retail business
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

      {/* Mobile Solutions Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mobile-First Retail Solutions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Mobile Forms',
                    description: 'Access all forms on any mobile device',
                    icon: Smartphone,
                  },
                  {
                    title: 'Instant Feedback',
                    description: 'Collect customer feedback in real-time',
                    icon: MessageSquare,
                  },
                  {
                    title: 'Quick Actions',
                    description: 'Streamline common retail tasks and processes',
                    icon: Zap,
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
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <item.icon className="h-6 w-6 text-orange-600" />
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
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Mobile Retail Solutions"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Retail Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              See how retailers use our platform to improve operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="text-sm font-medium text-orange-600">
                  {useCase.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get Insights from Your Data
                </h2>
                <p className="mt-4 text-lg text-orange-100">
                  Turn your retail data into actionable insights with powerful analytics.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition duration-150"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}