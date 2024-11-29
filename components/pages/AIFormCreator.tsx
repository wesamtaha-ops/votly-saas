import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Loader, Lightbulb, Wand2, Brain, CheckCircle } from 'lucide-react';
import { ExamplePrompt } from '@/components/forms/ExamplePrompt';
import { PromptInput } from '@/components/forms/PromptInput';
import { GenerationProgress } from '@/components/forms/GenerationProgress';

const examplePrompts = [
  {
    title: "Customer Feedback Survey",
    description: "Create a comprehensive customer feedback survey that includes product satisfaction rating, delivery experience evaluation, customer service quality assessment, NPS score, and open-ended feedback sections. Add conditional logic to show specific questions based on satisfaction levels.",
    category: "Business"
  },
  {
    title: "Employee Engagement Survey",
    description: "Design an anonymous employee engagement survey covering workplace satisfaction, management effectiveness, career development opportunities, work-life balance, and company culture. Include matrix questions for rating different aspects and comment sections for suggestions.",
    category: "HR"
  },
  {
    title: "Event Registration Form",
    description: "Build a dynamic event registration form with attendee details, ticket selection, session preferences, dietary requirements, and accessibility needs. Include payment integration and automatic confirmation emails. Add logic to show/hide session options based on ticket type.",
    category: "Events"
  },
  {
    title: "Product Research Survey",
    description: "Generate a market research survey for a new product launch. Include demographics questions, brand awareness assessment, product feature preferences, price sensitivity analysis, and purchase intent evaluation. Use skip logic to customize questions based on awareness levels.",
    category: "Marketing"
  }
];

export default function AIFormCreator() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [generationStep, setGenerationStep] = useState(0);
  const [generationProgress, setGenerationProgress] = useState(0);

  const generationSteps = [
    { title: 'Analyzing requirements', description: 'Processing your form requirements...' },
    { title: 'Designing structure', description: 'Creating optimal form structure and flow...' },
    { title: 'Adding questions', description: 'Generating relevant questions and options...' },
    { title: 'Implementing logic', description: 'Setting up conditional logic and validation...' },
    { title: 'Finalizing form', description: 'Applying best practices and optimizations...' }
  ];

  const simulateGeneration = async () => {
    for (let i = 0; i < generationSteps.length; i++) {
      setGenerationStep(i);
      // Progress within each step
      for (let progress = 0; progress <= 100; progress += 5) {
        setGenerationProgress(progress);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      await new Promise(resolve => setTimeout(resolve, 400));
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      await simulateGeneration();
      navigate(`/forms/new?template=ai&prompt=${encodeURIComponent(prompt)}`);
    } catch (error) {
      console.error('Error generating form:', error);
    } finally {
      setIsGenerating(false);
      setGenerationStep(0);
      setGenerationProgress(0);
    }
  };

  const handlePromptSelect = (index: number, description: string) => {
    setSelectedPrompt(index);
    setPrompt(description);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-purple-50 rounded-lg mb-4">
            <Sparkles className="h-6 w-6 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">AI Form Generator</h1>
          <p className="mt-2 text-sm text-gray-600">
            Describe your form and let AI create it for you
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Form Generator */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <PromptInput
              value={prompt}
              onChange={setPrompt}
              onGenerate={handleGenerate}
              onSkip={() => navigate('/forms/new')}
              isGenerating={isGenerating}
            />

            {isGenerating && (
              <div className="mt-8">
                <GenerationProgress
                  currentStep={generationSteps[generationStep]}
                  progress={generationProgress}
                />
              </div>
            )}
          </div>

          {/* Example Prompts */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Example Prompts</h2>
            </div>
            <div className="space-y-4">
              {examplePrompts.map((examplePrompt, index) => (
                <ExamplePrompt
                  key={index}
                  prompt={examplePrompt}
                  isSelected={selectedPrompt === index}
                  onClick={() => handlePromptSelect(index, examplePrompt.description)}
                />
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Wand2 className="h-5 w-5 text-purple-600 mr-2" />
              <h3 className="text-sm font-medium text-purple-900">Tips for better results</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Brain className="h-4 w-4 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm text-purple-800">
                  Be specific about question types, validation rules, and any conditional logic needed
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm text-purple-800">
                  Include details about your target audience and the purpose of the form
                </p>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm text-purple-800">
                  Mention any special features like payment integration, file uploads, or email notifications
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}