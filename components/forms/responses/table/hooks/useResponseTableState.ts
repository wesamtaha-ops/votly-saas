import { useState, useMemo } from 'react';
import { ResponseDetails } from '@/types';
import { SortConfig, TableFilters } from '../types';

export function useResponseTableState(responses: ResponseDetails[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    columnId: 'submittedAt',
    direction: 'desc'
  });

  const [filters, setFilters] = useState<TableFilters>({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const sortedResponses = useMemo(() => {
    const sorted = [...responses].sort((a, b) => {
      const aValue = getValueByColumnId(a, sortConfig.columnId);
      const bValue = getValueByColumnId(b, sortConfig.columnId);
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return applyFilters(sorted, filters);
  }, [responses, sortConfig, filters]);

  const handleSort = (columnId: string) => {
    setSortConfig(prev => ({
      columnId,
      direction: prev.columnId === columnId && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return {
    sortedResponses,
    sortConfig,
    handleSort,
    filters,
    setFilters,
    page,
    setPage,
    pageSize,
    setPageSize
  };
}

function getValueByColumnId(response: ResponseDetails, columnId: string) {
  switch (columnId) {
    case 'submittedAt':
      return new Date(response.submissionStarted).getTime();
    case 'completionRate':
      return response.metadata.completionRate;
    case 'status':
      return response.status;
    default:
      return '';
  }
}

function applyFilters(responses: ResponseDetails[], filters: TableFilters) {
  return responses.filter(response => {
    if (filters.status?.length && !filters.status.includes(response.status)) {
      return false;
    }
    
    if (filters.dateRange) {
      const submissionDate = new Date(response.submissionStarted);
      if (submissionDate < filters.dateRange.start || submissionDate > filters.dateRange.end) {
        return false;
      }
    }

    if (filters.platform?.length && !filters.platform.includes(response.submissionType)) {
      return false;
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return Object.values(response.answers).some(answer => 
        String(answer).toLowerCase().includes(searchLower)
      );
    }

    return true;
  });
}