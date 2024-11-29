import React from 'react';
import { MoreVertical, Edit2, Clock } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface FormOptionsDropdownProps {
  onEdit: () => void;
  onClosingOptions: () => void;
}

export function FormOptionsDropdown({ onEdit, onClosingOptions }: FormOptionsDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button 
          className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="More options"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item
            className="group text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center px-4 py-2 text-sm cursor-pointer outline-none"
            onClick={onEdit}
          >
            <Edit2 className="mr-3 h-4 w-4" />
            Edit Form
          </DropdownMenu.Item>

          <DropdownMenu.Item 
            className="group text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center px-4 py-2 text-sm cursor-pointer outline-none"
            onClick={onClosingOptions}
          >
            <Clock className="mr-3 h-4 w-4" />
            Adjust Closing Options
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}