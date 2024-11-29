import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ResponseTableHeader } from './ResponseTableHeader';
import { ResponseTableRow } from './ResponseTableRow';
import { ResponseTableComments } from './ResponseTableComments';
import { ResponseTableFilters } from './ResponseTableFilters';
import { ResponseTablePagination } from './ResponseTablePagination';
import { ResponseDetails } from '@/types';
import { useResponseTableState } from './hooks/useResponseTableState';
import { useResponseTableSelection } from './hooks/useResponseTableSelection';
import { useResponseTableComments } from './hooks/useResponseTableComments';
import { Settings, Download, Filter } from 'lucide-react';
import './styles/ResponseTable.css';

interface ResponseTableProps {
  responses: ResponseDetails[];
  onViewDetails: (response: ResponseDetails) => void;
}

export function ResponseTable({ responses, onViewDetails }: ResponseTableProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [selectedCell, setSelectedCell] = useState<{rowId: string; columnId: string} | null>(null);
  const [resizingColumn, setResizingColumn] = useState<string | null>(null);
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  
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

  const {
    comments,
    addComment,
    editComment,
    deleteComment,
    activeCommentThread,
    setActiveCommentThread
  } = useResponseTableComments();

  // Handle column resizing
  useEffect(() => {
    if (!resizingColumn) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!tableRef.current) return;
      
      const tableRect = tableRef.current.getBoundingClientRect();
      const newWidth = Math.max(100, e.clientX - tableRect.left);
      
      setColumnWidths(prev => ({
        ...prev,
        [resizingColumn]: newWidth
      }));
    };

    const handleMouseUp = () => {
      setResizingColumn(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizingColumn]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="excel-table-container"
      ref={tableRef}
    >
      {/* Excel-like Toolbar */}
      <div className="excel-toolbar">
        <button className="excel-toolbar-button">
          <Filter className="h-4 w-4" />
        </button>
        <button className="excel-toolbar-button">
          <Download className="h-4 w-4" />
        </button>
        <button className="excel-toolbar-button">
          <Settings className="h-4 w-4" />
        </button>
        <div className="h-4 w-px bg-gray-300 mx-2" />
        <span className="text-xs text-gray-600">
          {selectedRows.length} selected
        </span>
      </div>

      <ResponseTableFilters 
        filters={filters}
        onFilterChange={setFilters}
      />

      <div className="excel-table-wrapper">
        <table className="excel-table">
          <ResponseTableHeader
            sortConfig={sortConfig}
            onSort={handleSort}
            onSelectAll={selectAllRows}
            isAllSelected={isAllSelected}
            columnWidths={columnWidths}
            onResizeStart={setResizingColumn}
          />
          
          <tbody>
            {sortedResponses.map((response) => (
              <ResponseTableRow
                key={response.id}
                response={response}
                isSelected={selectedRows.includes(response.id)}
                onSelect={() => toggleRowSelection(response.id)}
                onViewDetails={() => onViewDetails(response)}
                selectedCell={selectedCell}
                onCellSelect={(columnId) => setSelectedCell({
                  rowId: response.id,
                  columnId
                })}
                comments={comments[response.id] || []}
                columnWidths={columnWidths}
              />
            ))}
          </tbody>
        </table>
      </div>

      <ResponseTablePagination
        page={page}
        pageSize={pageSize}
        total={responses.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />

      {/* Excel-like Status Bar */}
      <div className="excel-status-bar">
        <div>
          {selectedRows.length} of {responses.length} selected
        </div>
        <div>
          Average completion rate: {
            Math.round(
              responses.reduce((acc, r) => acc + r.metadata.completionRate, 0) / responses.length
            )}%
        </div>
        <div>
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {activeCommentThread && (
        <ResponseTableComments
          comments={activeCommentThread.comments}
          onAddComment={addComment}
          onEditComment={editComment}
          onDeleteComment={deleteComment}
          onClose={() => setActiveCommentThread(null)}
        />
      )}
    </motion.div>
  );
}