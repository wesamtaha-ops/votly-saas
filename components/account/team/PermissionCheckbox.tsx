import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

interface PermissionCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
}

export function PermissionCheckbox({ checked, onCheckedChange, label }: PermissionCheckboxProps) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <Checkbox.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={`flex h-5 w-5 items-center justify-center rounded-md transition-all duration-200 ${
          checked 
            ? 'border-2 border-indigo-600 bg-indigo-600 shadow-sm' 
            : 'border-2 border-gray-200 bg-white hover:border-indigo-400'
        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        <Checkbox.Indicator className="text-white">
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label className="text-xs font-medium text-gray-600">{label}</label>
      )}
    </div>
  );
}