import React from 'react';
import { FormCard } from './FormCard';
import { Form } from '@/types';

interface FormGridProps {
  forms: Form[];
  onShare: (formId: string) => void;
  onOptionsClick: (formId: string) => void;
  onClosingOptions: (formId: string) => void;
  onStatusChange: (formId: string, status: 'live' | 'draft' | 'closed') => void;
}

export function FormGrid({ forms, onShare, onOptionsClick, onClosingOptions, onStatusChange }: FormGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {forms.map((form) => (
        <FormCard
          key={form.id}
          form={form}
          onShare={() => onShare(form.id)}
          onOptionsClick={() => onOptionsClick(form.id)}
          onClosingOptions={() => onClosingOptions(form.id)}
          onStatusChange={(newStatus) => onStatusChange(form.id, newStatus)}
        />
      ))}
    </div>
  );
}