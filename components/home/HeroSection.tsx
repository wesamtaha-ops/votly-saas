import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FormPreview } from './FormPreview';

export const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80b7ff] to-[#89dcfc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-[90rem] px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        {/* Left Column - 40% */}
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 xl:max-w-2xl">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-24 sm:mt-32 lg:mt-1"
          >
            <a href="#" className="inline-flex items-center">
              <span className="rounded-full bg-[#4C3AE3]/10 px-3 py-1 text-sm font-semibold leading-6 text-[#4C3AE3] ring-1 ring-inset ring-[#4C3AE3]/20">
                Latest Updates
              </span>
              <span className="inline-flex items-center space-x-2 font-medium leading-6 text-[#262627] ml-4">
                <span>Just shipped v1.0</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 text-4xl font-bold tracking-tight text-[#262627] sm:text-6xl xl:text-7xl"
          >
            Get to know your customers
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-cyan-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative"> with AI power </span>
            </span>
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg leading-8 text-[#4F4F51] xl:text-xl max-w-2xl"
          >
            Collect all the data you need to understand customers with forms designed to be refreshingly different.
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Link
              to="/signup"
              className="rounded-md bg-[#4C3AE3] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#5846EC] transition-all duration-300 hover:scale-105 xl:text-lg"
            >
              Get started-it's free
            </Link>
            <Link
              to="/templates"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200 xl:text-base"
            >
              View templates <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column - 60% */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32 xl:w-[55%]"
        >
          <FormPreview />
        </motion.div>
      </div>
    </div>
  );
};