import React from 'react';
import { Eye, MessageSquare } from 'lucide-react';
import { ResponseDetails } from '@/types';
import { Comment } from './types';
import { StatusBadge } from './StatusBadge';
import { format } from 'date-fns';

interface ResponseTableRowProps {
  response: ResponseDetails;
  isSelected: boolean;
  onSelect: () => void;
  onViewDetails: () => void;
  selectedCell: { rowId: string; columnId: string } | null;
  onCellSelect: (columnId: string) => void;
  comments: Comment[];
}

export function ResponseTableRow({
  response,
  isSelected,
  onSelect,
  onViewDetails,
  selectedCell,
  onCellSelect,
  comments
}: ResponseTableRowProps) {
  const isRowSelected = selectedCell?.rowId === response.id;
  
  return (
    <tr className={`excel-table-row ${isSelected ? 'selected' : ''}`}>
    
      
      <td 
        className={`excel-cell ${isRowSelected && selectedCell?.columnId === 'status' ? 'selected' : ''}`}
        onClick={() => onCellSelect('status')}
      >
        <StatusBadge status={response.status} />
      </td>

      <td 
        className={`excel-cell ${isRowSelected && selectedCell?.columnId === 'submittedAt' ? 'selected' : ''}`}
        onClick={() => onCellSelect('submittedAt')}
      >
        {format(new Date(response.submissionStarted), 'PPp')}
      </td>

      <td 
        className={`excel-cell ${isRowSelected && selectedCell?.columnId === 'completionRate' ? 'selected' : ''}`}
        onClick={() => onCellSelect('completionRate')}
      >
        <div className="flex items-center space-x-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full" 
              style={{ width: `${response.metadata.completionRate}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">
            {response.metadata.completionRate}%
          </span>
        </div>
      </td>

      <td 
        className={`excel-cell ${isRowSelected && selectedCell?.columnId === 'platform' ? 'selected' : ''}`}
        onClick={() => onCellSelect('platform')}
      >
        <div className="flex items-center space-x-2">
          <span>{response.browser}</span>
          <span className="text-gray-400">|</span>
          <span>{response.os}</span>
        </div>
      </td>

      <td 
        className={`excel-cell ${isRowSelected && selectedCell?.columnId === 'comments' ? 'selected' : ''}`}
        onClick={() => onCellSelect('comments')}
      >
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-4 w-4 text-gray-400" />
          <span>{comments.length}</span>
        </div>
      </td>

      <td className="excel-cell">

        <button
          onClick={onViewDetails}
          className="excel-action-button"
        >
         
       
        <div className="flex items-center space-x-2">
          <Eye className="h-4 w-4" />
          <span>View</span>
        </div>
        
        </button>
      </td>
    </tr>
  );
}