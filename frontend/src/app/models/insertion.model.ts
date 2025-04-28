export interface InsertionData {
  id?: string;
  type: 'comment' | 'post' | 'user';
  action: 'create' | 'update' | 'delete';
  data: any;
  timestamp: Date;
  metadata?: {
    userId?: string;
    source?: string;
    priority?: 'low' | 'medium' | 'high';
  };
}
