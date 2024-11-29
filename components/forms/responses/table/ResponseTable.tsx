import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { ResponseTableHeader } from './ResponseTableHeader';
import { ResponseTableRow } from './ResponseTableRow';
import { ResponseTablePagination } from './ResponseTablePagination';
import { useResponseTableState } from './hooks/useResponseTableState';
import { useResponseTableSelection } from './hooks/useResponseTableSelection';
import type { ResponseColumn, ResponseData } from './types';
import { mockResponses } from './mockData';

interface ResponseTableProps {
  responses?: ResponseData[];
  questions?: Array<{ id: string; title: string }>;
  onViewDetails: (response: ResponseData) => void;
}

export function ResponseTable({ 
  responses = mockResponses, 
  questions = [], 
  onViewDetails 
}: ResponseTableProps) {
  const generateColumns = React.useCallback((): ResponseColumn[] => {
    const baseColumns: ResponseColumn[] = [
      { id: 'lastUpdated', key: 'lastUpdated', label: 'Last updated', sortable: true, width: 180, type: 'date' },
      { id: 'status', key: 'status', label: 'Status', sortable: true, width: 120, type: 'status' },
      { id: 'fullName', key: 'answers.fullName', label: 'What is your full name?', sortable: true, width: 200 },
      { id: 'email', key: 'answers.email', label: 'What is your email address?', sortable: true, width: 200, type: 'email' },
      { id: 'phone', key: 'answers.phone', label: 'What is your phone number?', sortable: true, width: 180 },
      { id: 'address', key: 'answers.address', label: 'Address', sortable: true, width: 250 },
      { id: 'city', key: 'answers.city', label: 'City', sortable: true, width: 150 },
      { id: 'state', key: 'answers.state', label: 'State/Province', sortable: true, width: 200 }
    ];

    return [...baseColumns];
  }, [questions]);

  const [columns, setColumns] = useState<ResponseColumn[]>(() => generateColumns());
  const { 
    sortedResponses, 
    sortConfig, 
    handleSort, 
    filters, 
    setFilters,
    page,
    setPage,
    pageSize,
    setPageSize
  } = useResponseTableState(responses);

  const {
    selectedRows,
    toggleRowSelection,
    selectAllRows,
    isAllSelected
  } = useResponseTableSelection(responses);

  const handleColumnResize = (columnId: string, width: number) => {
    setColumns(prev => 
      prev.map(col => 
        col.id === columnId ? { ...col, width } : col
      )
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="custom">Custom range</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <ResponseTableHeader
            columns={columns}
            sortConfig={sortConfig}
            onSort={handleSort}
            onColumnResize={handleColumnResize}
            isAllSelected={isAllSelected}
            onSelectAll={selectAllRows}
          />
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedResponses.map((response) => (
              <ResponseTableRow
                key={response.id}
                columns={columns}
                data={response}
                onView={() => onViewDetails(response)}
                isSelected={selectedRows.includes(response.id)}
                onToggleSelect={() => toggleRowSelection(response.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <ResponseTablePagination
        page={page}
        pageSize={pageSize}
        total={sortedResponses.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}