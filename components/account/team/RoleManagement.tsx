import React, { useState } from 'react';
import { Role, DEFAULT_PERMISSIONS, DEFAULT_ROLES } from '@/types/permissions';
import { RoleForm } from './RoleForm';
import { Plus, Edit2, Trash2, Shield } from 'lucide-react';
import toast from 'react-hot-toast';
import * as Dialog from '@radix-ui/react-dialog';
import { PermissionRow } from './PermissionRow';

interface RoleManagementProps {
  initialRoles?: Role[];
}

export function RoleManagement({ initialRoles = DEFAULT_ROLES }: RoleManagementProps) {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | undefined>();

  const handleCreateRole = (role: Role) => {
    setRoles([...roles, role]);
    setIsFormOpen(false);
    toast.success('Role created successfully');
  };

  const handleUpdateRole = (updatedRole: Role) => {
    setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)));
    setIsFormOpen(false);
    setEditingRole(undefined);
    toast.success('Role updated successfully');
  };

  const handleDeleteRole = (roleId: string) => {
    // Prevent deletion of default roles
    if (['administrator', 'moderator', 'viewer'].includes(roleId)) {
      toast.error('Cannot delete default roles');
      return;
    }

    if (window.confirm('Are you sure you want to delete this role?')) {
      setRoles(roles.filter((role) => role.id !== roleId));
      toast.success('Role deleted successfully');
    }
  };

  const handleEditRole = (role: Role) => {
    setEditingRole(role);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Roles & Permissions</h3>
          <p className="mt-1 text-sm text-gray-500">Manage access levels and permissions for team members</p>
        </div>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={() => {
            setEditingRole(undefined);
            setIsFormOpen(true);
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Role
        </button>
      </div>

      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Shield className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{role.name}</h4>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 p-2 rounded-lg hover:bg-indigo-50"
                    onClick={() => handleEditRole(role)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50"
                    onClick={() => handleDeleteRole(role.id)}
                    disabled={['administrator', 'moderator', 'viewer'].includes(role.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 space-y-4">
              {role.permissions.map((permission) => (
                <PermissionRow
                  key={permission.id}
                  permission={permission}
                  onPermissionChange={(permissionId, action, value) => {
                    const updatedRole = {
                      ...role,
                      permissions: role.permissions.map(p =>
                        p.id === permissionId
                          ? { ...p, actions: { ...p.actions, [action]: value } }
                          : p
                      )
                    };
                    handleUpdateRole(updatedRole);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Dialog.Root open={isFormOpen} onOpenChange={setIsFormOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40" />
          <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none overflow-y-auto">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              {editingRole ? 'Edit Role' : 'Create New Role'}
            </Dialog.Title>
            <RoleForm
              role={editingRole}
              onSave={editingRole ? handleUpdateRole : handleCreateRole}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingRole(undefined);
              }}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}