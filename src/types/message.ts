export interface Message {
  id: string;
  content: string;
  recipientCode: string;
  sentAt: string;
  isRead: boolean;
  isArchived: boolean;
}

export interface SendMessageRequest {
  content: string;
  recipientCode: string;
}

export interface SendMessageResponse {
  success: boolean;
  message?: Message;
  error?: string;
}

export interface GetMessagesResponse {
  success: boolean;
  messages: Message[];
  unreadCount: number;
}