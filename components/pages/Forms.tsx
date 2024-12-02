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
import { Filter, Menu, Plus, Search, Settings, Users, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { Form, TeamMember } from '@/types';
import * as Dialog from '@radix-ui/react-dialog';
import { WorkspaceSettingsModal } from '../forms/WorkspaceSettingsModal';

interface Workspace {
  id: string;
  name: string;
  forms: number;
  members: number;
  icon?: string;
}

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
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(null);
  const [showNewWorkspaceModal, setShowNewWorkspaceModal] = useState(false);
  const [showWorkspaceSettings, setShowWorkspaceSettings] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState('');
  const [workspaceSearchTerm, setWorkspaceSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock workspaces data
  const [workspaces] = useState<Workspace[]>([
    { id: '1', name: 'Marketing', forms: 12, members: 5, icon: 'M' },
    { id: '2', name: 'Sales', forms: 8, members: 3, icon: 'S' },
    { id: '3', name: 'HR', forms: 15, members: 7, icon: 'H' },
    { id: '4', name: 'Product', forms: 6, members: 4, icon: 'P' }
  ]);

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

  const handleCreateWorkspace = () => {
    if (newWorkspaceName.trim()) {
      toast.success(`Workspace "${newWorkspaceName}" created`);
      setShowNewWorkspaceModal(false);
      setNewWorkspaceName('');
    }
  };

  const handleWorkspaceSettings = (workspaceId: string) => {
    setSelectedWorkspace(workspaceId);
    setShowWorkspaceSettings(true);
  };

  const handleWorkspaceSelect = (workspaceId: string) => {
    setSelectedWorkspace(workspaceId);
    // Close sidebar on mobile after selection
    setIsSidebarOpen(false);
  };

  // Filter forms based on search and status
  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || form.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Filter workspaces based on search
  const filteredWorkspaces = workspaces.filter(workspace =>
    workspace.name.toLowerCase().includes(workspaceSearchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 px-4 py-2">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <h1 className="text-lg font-medium text-gray-900">Forms</h1>
            <CreateFormButton className="sm:hidden" />
          </div>
        </div>

        {/* Workspace Sidebar */}
        <div
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:relative w-80 bg-white border-r border-gray-200 h-full overflow-y-auto transition-transform duration-300 ease-in-out z-10`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Workspaces</h2>
              <button
                onClick={() => setShowNewWorkspaceModal(true)}
                className="p-1 text-gray-400 hover:text-gray-500"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search workspaces..."
                value={workspaceSearchTerm}
                onChange={(e) => setWorkspaceSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="space-y-2">
              {filteredWorkspaces.map((workspace) => (
                <button
                  key={workspace.id}
                  onClick={() => handleWorkspaceSelect(workspace.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-colors ${
                    selectedWorkspace === workspace.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium">
                      {workspace.icon}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium">{workspace.name}</div>
                      <div className="text-xs text-gray-500">
                        {workspace.forms} forms • {workspace.members} members
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWorkspaceSettings(workspace.id);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Settings className="h-4 w-4 text-gray-400" />
                  </button>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pt-16 lg:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h1 className="text-2xl font-bold text-gray-900 hidden lg:block">My Forms</h1>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <ViewToggle view={view} onViewChange={setView} />
                <CreateFormButton className="hidden sm:inline-flex" />
              </div>
            </div>

            <StatsBanner 
              stats={{
                totalForms: forms.length,
                totalResponses: forms.reduce((acc, form) => acc + form.responses, 0),
                avgCompletionRate: Math.round(forms.reduce((acc, form) => acc + form.completionRate, 0) / forms.length),
                activeCollaborators: new Set(forms.flatMap(f => f.collaborators.map(c => c.memberId))).size
              }}
            />

            <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-6">
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

            <BatchActions
              selectedForms={selectedForms}
              onStatusChange={handleBatchStatusChange}
              onDelete={handleBatchDelete}
              onArchive={handleBatchArchive}
            />
          </div>
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

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

      {/* New Workspace Modal */}
      <Dialog.Root open={showNewWorkspaceModal} onOpenChange={setShowNewWorkspaceModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40" />
          <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              Create New Workspace
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500 mb-4">
              Create a workspace to organize your forms and collaborate with team members.
            </Dialog.Description>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="workspace-name" className="block text-sm font-medium text-gray-700">
                  Workspace Name
                </label>
                <input
                  id="workspace-name"
                  type="text"
                  value={newWorkspaceName}
                  onChange={(e) => setNewWorkspaceName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="e.g. Marketing Team"
                />
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span>You'll be able to invite team members after creating the workspace</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setShowNewWorkspaceModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateWorkspace}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 w-full sm:w-auto"
              >
                Create Workspace
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Workspace Settings Modal */}
      {selectedWorkspace && showWorkspaceSettings && (
        <WorkspaceSettingsModal
          isOpen={showWorkspaceSettings}
          onClose={() => setShowWorkspaceSettings(false)}
          workspace={workspaces.find(w => w.id === selectedWorkspace)!}
        />
      )}
    </div>
  );
}