import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The form builder has completely transformed how we collect data. It's intuitive, powerful, and the AI features are a game-changer.",
    author: {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    content: "We've seen a 40% increase in form completion rates since switching to this platform. The conditional logic features are exceptional.",
    author: {
      name: 'Michael Chen',
      role: 'Digital Marketing Director',
      company: 'GrowthLabs',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    content: "The analytics and reporting capabilities have given us invaluable insights into our customer feedback process.",
    author: {
      name: 'Emily Rodriguez',
      role: 'Customer Success Lead',
      company: 'ServicePro',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
];

const stats = [
  { id: 1, name: 'Active Users', value: '50,000+' },
  { id: 2, name: 'Forms Created', value: '1M+' },
  { id: 3, name: 'Data Points Collected', value: '100M+' },
  { id: 4, name: 'Customer Satisfaction', value: '4.9/5' },
];

export function SocialProof() {
  return (
    <div className="py-24 bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Trusted by Thousands
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don't just take our word for it
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-300 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {testimonials.map((testimonial, testimonialIdx) => (
            <div
              key={testimonialIdx}
              className="relative isolate flex flex-col justify-between rounded-2xl bg-white/5 px-6 py-8 ring-1 ring-white/5 hover:bg-white/10 transition duration-300"
            >
              <div className="flex items-center gap-x-2 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-normal">{testimonial.content}</p>
              <div className="mt-8 flex items-center gap-x-4">
                <img
                  className="h-12 w-12 rounded-full bg-gray-800"
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author.name}
                  </div>
                  <div className="text-gray-400">
                    {testimonial.author.role} at {testimonial.author.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <dt className="text-sm leading-6 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}