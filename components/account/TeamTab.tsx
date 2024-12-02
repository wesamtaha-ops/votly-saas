import React, { useState } from 'react';
import { TeamMemberList } from './team/TeamMemberList';
import { TeamActivityLog } from './team/TeamActivityLog';
import { RoleManagement } from './team/RoleManagement';
import { InviteMemberDialog } from './team/InviteMemberDialog';
import { Tabs } from './team/Tabs';
import { Plus } from 'lucide-react';
import { useTeam } from '@/hooks/useTeam';

type TabType = 'members' | 'activity' | 'roles' | 'workspace';

export function TeamTab() {
  const [activeTab, setActiveTab] = useState<TabType>('members');
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const { teamMembers, activities, roles, workspace, loading, error } = useTeam();

  const tabs = [
    { id: 'members', label: 'Team Members' },
    { id: 'roles', label: 'Roles & Permissions' },
    { id: 'activity', label: 'Activity Log' },

  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'members':
        return <TeamMemberList members={teamMembers} />;
      case 'activity':
        return <TeamActivityLog activities={activities} />;
      case 'roles':
        return <RoleManagement roles={roles} />;
      case 'workspace':
        return <WorkspaceSettings workspace={workspace} />;
      default:
        return null;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Team Management</h3>
          <button
            onClick={() => setIsInviteDialogOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Invite Member
          </button>
        </div>

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(tab) => setActiveTab(tab as TabType)}
        />

        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>

      <InviteMemberDialog
        isOpen={isInviteDialogOpen}
        onClose={() => setIsInviteDialogOpen(false)}
      />
    </div>
  );
}