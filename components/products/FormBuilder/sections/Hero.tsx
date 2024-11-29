import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                Latest Features
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v2.0</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
          
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Create Professional Forms Without Code
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Build beautiful, responsive forms in minutes with our intuitive drag-and-drop builder. From simple contact forms to complex surveys, we've got you covered.
          </p>
          
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Building Free
            </Link>
            <Link
              to="/templates"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Browse Templates <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-0 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative rounded-2xl bg-gray-50/80 backdrop-blur-xl shadow-xl ring-1 ring-gray-900/5 p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-300 via-indigo-200 to-purple-300 opacity-10 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Form Builder Interface"
                className="relative rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-4">
                <Sparkles className="h-6 w-6 text-indigo-600" />
                <span className="text-sm font-medium text-gray-900">AI-Powered Form Creation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}