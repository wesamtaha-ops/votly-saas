export interface Permission {
  id: string;
  name: string;
  actions: {
    view: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
  };
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export const DEFAULT_PERMISSIONS: Permission[] = [
  {
    id: 'forms',
    name: 'Forms',
    actions: { view: false, add: false, edit: false, delete: false }
  },
  {
    id: 'templates',
    name: 'Templates',
    actions: { view: false, add: false, edit: false, delete: false }
  },
  {
    id: 'billing',
    name: 'Billing',
    actions: { view: false, add: false, edit: false, delete: false }
  },
  {
    id: 'results',
    name: 'Results',
    actions: { view: false, add: false, edit: false, delete: false }
  },
  {
    id: 'account',
    name: 'Account',
    actions: { view: false, add: false, edit: false, delete: false }
  }
];

export const DEFAULT_ROLES: Role[] = [
  {
    id: 'administrator',
    name: 'Administrator',
    description: 'Full access to all features and settings',
    permissions: DEFAULT_PERMISSIONS.map(p => ({
      ...p,
      actions: { view: true, add: true, edit: true, delete: true }
    }))
  },
  {
    id: 'moderator',
    name: 'Moderator',
    description: 'Can manage forms and view results',
    permissions: DEFAULT_PERMISSIONS.map(p => ({
      ...p,
      actions: p.id === 'billing' || p.id === 'account' 
        ? { view: false, add: false, edit: false, delete: false }
        : { view: true, add: true, edit: true, delete: false }
    }))
  },
  {
    id: 'viewer',
    name: 'Viewer',
    description: 'Can only view forms and results',
    permissions: DEFAULT_PERMISSIONS.map(p => ({
      ...p,
      actions: { view: true, add: false, edit: false, delete: false }
    }))
  }
];