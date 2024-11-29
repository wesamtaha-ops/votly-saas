export interface Permission {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  forms: number;
  avatar?: string;
}

export interface Form {
  id: string;
  name: string;
  responses: number;
  lastUpdated: string;
  status: 'live' | 'draft' | 'closed';
  collaborators: Array<{
    memberId: string;
    permission: string;
  }>;
  ownerId: string;
  completionRate: number;
  avgResponseTime: string;
}

export interface Activity {
  id: string;
  type: 'create' | 'update' | 'delete';
  user: string;
  content: string;
  date: string;
  icon: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface Workspace {
  id: string;
  name: string;
  visibility: 'public' | 'private';
  shareTemplates: boolean;
  shareThemes: boolean;
  allowMemberInvites: boolean;
}

export interface ResponseDetails {
  id: string;
  submissionStarted: string;
  lastUpdated: string;
  submissionType: 'web' | 'mobile' | 'api';
  status: 'complete' | 'partial' | 'invalid';
  currentPage: string;
  browser: string;
  os: string;
  network: string;
  networkId: string;
  ipAddress: string;
  answers: Record<string, any>;
  metadata: {
    timeSpent: string;
    pagesVisited: number;
    completionRate: number;
  };
}

// types/index.ts
export interface ResponseDetails {
  id: string;
  submissionStarted: string;
  lastUpdated: string;
  submissionType: 'web' | 'mobile' | 'api';
  status: 'complete' | 'partial' | 'invalid';
  currentPage: string;
  browser: string;
  os: string;
  network: string;
  networkId: string;
  ipAddress: string;
  answers: Record<string, any>;
  metadata: {
    timeSpent: string;
    pagesVisited: number;
    completionRate: number;
  };
  comments?: Array<{
    id: string;
    user: {
      id: string;
      name: string;
      avatar: string;
    };
    content: string;
    timestamp: Date;
    mentions: string[];
    replies?: Array<{
      id: string;
      user: {
        id: string;
        name: string;
        avatar: string;
      };
      content: string;
      timestamp: Date;
      mentions: string[];
    }>;
  }>;
}
