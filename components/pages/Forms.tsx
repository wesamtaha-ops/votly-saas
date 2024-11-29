import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateFormButton } from '@/components/common/CreateFormButton';
import { ViewToggle } from '../forms/ViewToggle';
import { FilterPanel } from '../forms/filters/FilterPanel';
import { FormGrid } from '../forms/FormGrid';
import { FormList } from '../forms/FormList';
import { BatchActions } from '../forms/BatchActions';
import { FormShareDialog } from '../forms/FormShareDialog';
import { ClosingOptionsModal } from '../forms/ClosingOptionsModal';
import { SearchAndFilters } from './forms/SearchAndFilters';
import { StatsBanner } from './forms/StatsBanner';
import { Filter } from 'lucide-react';
import toast from 'react-hot-toast';
import { Form, TeamMember } from '@/types';

export default function Forms() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [showCollaborators, setShowCollaborators] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('lastUpdated');
  const [isClosingModalOpen, setIsClosingModalOpen] = useState(false);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedForms, setSelectedForms] = useState<string[]>([]);

  // Mock data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'administrator',
      forms: 12,
      avatar: 'https://ui-avatars.com/api/?name=John+Doe'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'creator',
      forms: 5,
      avatar: 'https://ui-avatars.com/api/?name=Jane+Smith'
    }
  ];

  const [forms, setForms] = useState<Form[]>([
    {
      id: '1',
      name: 'Customer Feedback Survey',
      responses: 234,
      lastUpdated: '2h ago',
      status: 'live',
      collaborators: [{ memberId: '2', permission: 'creator' }],
      ownerId: '1',
      completionRate: 87,
      avgResponseTime: '2m 34s'
    },
    {
      id: '2',
      name: 'Event Registration Form',
      responses: 156,
      lastUpdated: '1d ago',
      status: 'live',
      collaborators: [],
      ownerId: '1',
      completionRate: 92,
      avgResponseTime: '1m 45s'
    }
  ]);

  const handleShareForm = (formId: string) => {
    setShowCollaborators(formId === showCollaborators ? null : formId);
  };

  const handleEditForm = (formId: string) => {
    // Handle edit form logic
    console.log('Editing form:', formId);
  };

  const handleClosingOptions = (formId: string) => {
    setSelectedFormId(formId);
    setIsClosingModalOpen(true);
  };

  const handleStatusChange = (formId: string, newStatus: 'live' | 'draft' | 'closed') => {
    setForms(forms.map(form => 
      form.id === formId ? { ...form, status: newStatus } : form
    ));
    toast.success(`Form status updated to ${newStatus}`);
  };

  const handleBatchStatusChange = (status: string) => {
    setForms(forms.map(form => 
      selectedForms.includes(form.id) ? { ...form, status: status as 'live' | 'draft' | 'closed' } : form
    ));
    toast.success(`Updated status for ${selectedForms.length} forms`);
    setSelectedForms([]);
  };

  const handleBatchDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedForms.length} forms?`)) {
      setForms(forms.filter(form => !selectedForms.includes(form.id)));
      toast.success(`Deleted ${selectedForms.length} forms`);
      setSelectedForms([]);
    }
  };

  const handleBatchArchive = () => {
    setForms(forms.map(form => 
      selectedForms.includes(form.id) ? { ...form, status: 'closed' } : form
    ));
    toast.success(`Archived ${selectedForms.length} forms`);
    setSelectedForms([]);
  };

  // Filter forms based on search and status
  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || form.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Forms</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and analyze your forms
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <ViewToggle view={view} onViewChange={setView} />
            <CreateFormButton />
          </div>
        </div>

        {/* Stats Banner */}
        <StatsBanner 
          stats={{
            totalForms: forms.length,
            totalResponses: forms.reduce((acc, form) => acc + form.responses, 0),
            avgCompletionRate: Math.round(forms.reduce((acc, form) => acc + form.completionRate, 0) / forms.length),
            activeCollaborators: new Set(forms.flatMap(f => f.collaborators.map(c => c.memberId))).size
          }}
        />

        {/* Search and Filters */}
        <div className="flex flex-col mt-10 sm:flex-row gap-4 mb-6">
          <SearchAndFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <button
            onClick={() => setShowFilterPanel(true)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </button>
        </div>

        {/* Forms Grid/List */}
        {view === 'grid' ? (
          <FormGrid
            forms={filteredForms}
            onShare={handleShareForm}
            onOptionsClick={handleEditForm}
            onClosingOptions={handleClosingOptions}
            onStatusChange={handleStatusChange}
          />
        ) : (
          <FormList
            forms={filteredForms}
            onShare={handleShareForm}
            onOptionsClick={handleEditForm}
            onClosingOptions={handleClosingOptions}
            onStatusChange={handleStatusChange}
          />
        )}

        {/* Batch Actions */}
        <BatchActions
          selectedForms={selectedForms}
          onStatusChange={handleBatchStatusChange}
          onDelete={handleBatchDelete}
          onArchive={handleBatchArchive}
        />

        {/* Modals */}
        <FilterPanel
          isOpen={showFilterPanel}
          onClose={() => setShowFilterPanel(false)}
          onApplyFilters={() => {}}
        />

        {showCollaborators && (
          <FormShareDialog
            form={forms.find(f => f.id === showCollaborators)!}
            teamMembers={teamMembers}
            onClose={() => setShowCollaborators(null)}
          />
        )}

        <ClosingOptionsModal
          isOpen={isClosingModalOpen}
          onClose={() => setIsClosingModalOpen(false)}
          onSave={(options) => {
            console.log('Saving closing options:', options);
            setIsClosingModalOpen(false);
          }}
        />
      </div>
    </div>
  );
}