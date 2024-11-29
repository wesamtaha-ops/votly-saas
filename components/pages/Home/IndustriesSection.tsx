import React from 'react';
import { industries } from '@/data/home';
import { motion } from 'framer-motion';

export function IndustriesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-xl font-semibold leading-7 text-indigo-400">
          Industries
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted across industries
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Tailored solutions for your specific industry needs
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-none">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className={`rounded-lg p-2 ${industry.color} w-fit mb-4`}>
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                <p className="mt-2 text-gray-300">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}