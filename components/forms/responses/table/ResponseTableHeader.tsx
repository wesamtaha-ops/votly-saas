import React from 'react';
import { ArrowUp, ArrowDown, MoreVertical } from 'lucide-react';
import { SortConfig } from './types';

interface ResponseTableHeaderProps {
  sortConfig: SortConfig;
  onSort: (columnId: string) => void;
  onSelectAll: () => void;
  isAllSelected: boolean;
}

export function ResponseTableHeader({ 
  sortConfig, 
  onSort, 
  onSelectAll, 
  isAllSelected 
}: ResponseTableHeaderProps) {
  const columns = [
    { id: 'status', label: 'Status' },
    { id: 'submittedAt', label: 'Submitted' },
    { id: 'completionRate', label: 'Completion' },
    { id: 'platform', label: 'Platform' },
    { id: 'comments', label: 'Comments' }
  ];

  return (
    <thead className="excel-table-header">
      <tr>
      
        {columns.map((column) => (
          <th
            key={column.id}
            onClick={() => onSort(column.id)}
            className="excel-header-cell"
          >
            <div className="flex items-center space-x-1">
              <span>{column.label}</span>
              {sortConfig.columnId === column.id && (
                sortConfig.direction === 'asc' ? 
                  <ArrowUp className="h-4 w-4" /> : 
                  <ArrowDown className="h-4 w-4" />
              )}
            </div>
          </th>
        ))}
        <th className="excel-header-cell">
          <MoreVertical className="h-4 w-4" />
        </th>
      </tr>
    </thead>
  );
}