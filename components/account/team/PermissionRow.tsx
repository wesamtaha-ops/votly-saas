import React from 'react';
import { PermissionCheckbox } from './PermissionCheckbox';
import { Permission } from '@/types/permissions';
import { Shield } from 'lucide-react';

interface PermissionRowProps {
  permission: Permission;
  onPermissionChange: (permissionId: string, action: keyof Permission['actions'], value: boolean) => void;
}

export function PermissionRow({ permission, onPermissionChange }: PermissionRowProps) {
  return (
    <div className="py-4 px-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <Shield className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">{permission.name}</h4>
            <p className="text-xs text-gray-500 mt-0.5">Manage {permission.name.toLowerCase()} permissions</p>
          </div>
        </div>
        <div className="flex items-center space-x-12">
          <PermissionCheckbox
            checked={permission.actions.view}
            onCheckedChange={(checked) => onPermissionChange(permission.id, 'view', checked)}
            label="View"
          />
          <PermissionCheckbox
            checked={permission.actions.add}
            onCheckedChange={(checked) => onPermissionChange(permission.id, 'add', checked)}
            label="Add"
          />
          <PermissionCheckbox
            checked={permission.actions.edit}
            onCheckedChange={(checked) => onPermissionChange(permission.id, 'edit', checked)}
            label="Edit"
          />
          <PermissionCheckbox
            checked={permission.actions.delete}
            onCheckedChange={(checked) => onPermissionChange(permission.id, 'delete', checked)}
            label="Delete"
          />
        </div>
      </div>
    </div>
  );
}