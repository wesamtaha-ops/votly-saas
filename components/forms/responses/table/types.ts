export interface SortConfig {
  columnId: string;
  direction: 'asc' | 'desc';
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: Date;
  edited?: boolean;
  replies?: Comment[];
}

export interface TableFilters {
  status?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  platform?: string[];
  search?: string;
}

export interface CommentThread {
  cellId: string;
  comments: Comment[];
}