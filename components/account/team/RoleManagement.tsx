import React from 'react';
import { Role } from '@/types';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface RoleManagementProps {
  roles: Role[];
}

export function RoleManagement({ roles }: RoleManagementProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Roles & Permissions</h3>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Role
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {roles.map((role) => (
          <div
            key={role.id}
            className="px-4 py-5 border-b border-gray-200 sm:px-6 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">{role.name}</h4>
                <p className="mt-1 text-sm text-gray-500">{role.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-indigo-600 hover:text-indigo-900">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {role.permissions.map((permission) => (
                <div
                  key={permission.id}
                  className="relative flex items-start"
                >
                  <div className="flex items-center h-5">
                    <input
                      id={`${role.id}-${permission.id}`}
                      name={`${role.id}-${permission.id}`}
                      type="checkbox"
                      checked={permission.enabled}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor={`${role.id}-${permission.id}`}
                      className="font-medium text-gray-700"
                    >
                      {permission.name}
                    </label>
                    <p className="text-gray-500">{permission.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}