import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Settings, Users, Trash2, X, Mail, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

interface WorkspaceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  workspace: {
    id: string;
    name: string;
    members: number;
    forms: number;
  };
}

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export function WorkspaceSettingsModal({ isOpen, onClose, workspace }: WorkspaceSettingsModalProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'members'>('general');
  const [workspaceName, setWorkspaceName] = useState(workspace.name);
  const [newMemberEmail, setNewMemberEmail] = useState('');

  // Mock members data
  const [members] = useState<Member[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Smith'
    }
  ]);

  const handleSaveChanges = () => {
    // Implement save changes logic
    toast.success('Workspace settings updated');
    onClose();
  };

  const handleDeleteWorkspace = () => {
    if (window.confirm('Are you sure you want to delete this workspace? This action cannot be undone.')) {
      // Implement delete logic
      toast.success('Workspace deleted');
      onClose();
    }
  };

  const handleInviteMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMemberEmail) {
      // Implement invite logic
      toast.success(`Invitation sent to ${newMemberEmail}`);
      setNewMemberEmail('');
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-lg focus:outline-none overflow-hidden">
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-48 bg-gray-50 p-4 border-r border-gray-200">
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'general'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-4 w-4 inline-block mr-2" />
                  General
                </button>
                <button
                  onClick={() => setActiveTab('members')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'members'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users className="h-4 w-4 inline-block mr-2" />
                  Members
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    Workspace Settings
                  </Dialog.Title>
                  <Dialog.Close className="text-gray-400 hover:text-gray-500">
                    <X className="h-5 w-5" />
                  </Dialog.Close>
                </div>

                {activeTab === 'general' ? (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="workspace-name" className="block text-sm font-medium text-gray-700">
                        Workspace Name
                      </label>
                      <input
                        type="text"
                        id="workspace-name"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700">Workspace Statistics</h3>
                      <dl className="mt-2 grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <dt className="text-sm text-gray-500">Total Forms</dt>
                          <dd className="text-2xl font-semibold text-gray-900">{workspace.forms}</dd>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <dt className="text-sm text-gray-500">Members</dt>
                          <dd className="text-2xl font-semibold text-gray-900">{workspace.members}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <button
                        onClick={handleDeleteWorkspace}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Workspace
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <form onSubmit={handleInviteMember} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Invite Members
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="email"
                            id="email"
                            value={newMemberEmail}
                            onChange={(e) => setNewMemberEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="flex-1 min-w-0 block w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Invite
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-4">Members</h3>
                      <div className="space-y-4">
                        {members.map((member) => (
                          <div
                            key={member.id}
                            className="flex items-center justify-between py-3 border-b border-gray-100"
                          >
                            <div className="flex items-center">
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="h-8 w-8 rounded-full"
                              />
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{member.name}</p>
                                <p className="text-sm text-gray-500">{member.email}</p>
                              </div>
                            </div>
                            <select
                              value={member.role}
                              onChange={(e) => console.log('Role changed:', e.target.value)}
                              className="ml-4 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                              <option>Admin</option>
                              <option>Editor</option>
                              <option>Viewer</option>
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}