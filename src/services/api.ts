import { CreateUserRequest, CreateUserResponse, User } from '../types/user';
import { SendMessageRequest, SendMessageResponse, GetMessagesResponse, Message } from '../types/message';
import { generateLinkCode } from './validation';

// Simulate API delays for realistic UX
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock database using localStorage
const USERS_KEY = 'askme_users';
const MESSAGES_KEY = 'askme_messages';
const CURRENT_USER_KEY = 'askme_current_user';

const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: User[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const getMessages = (): Message[] => {
  const messages = localStorage.getItem(MESSAGES_KEY);
  return messages ? JSON.parse(messages) : [];
};

const saveMessages = (messages: Message[]): void => {
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
};

export const createUser = async (data: CreateUserRequest): Promise<CreateUserResponse> => {
  await delay(800);
  
  const users = getUsers();
  const existingUser = users.find(u => u.username.toLowerCase() === data.username.toLowerCase());
  
  if (existingUser) {
    return {
      success: false,
      error: 'Ce pseudo est déjà pris'
    };
  }
  
  const newUser: User = {
    id: crypto.randomUUID(),
    username: data.username,
    linkCode: generateLinkCode(),
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  
  return {
    success: true,
    user: newUser
  };
};

export const getUserByCode = async (code: string): Promise<{ success: boolean; user?: User; error?: string }> => {
  await delay(300);
  
  const users = getUsers();
  const user = users.find(u => u.linkCode === code);
  
  if (!user) {
    return {
      success: false,
      error: 'Utilisateur non trouvé'
    };
  }
  
  return {
    success: true,
    user: { ...user, id: '', createdAt: '' } // Don't expose sensitive data
  };
};

export const sendMessage = async (data: SendMessageRequest): Promise<SendMessageResponse> => {
  await delay(600);
  
  const users = getUsers();
  const recipient = users.find(u => u.linkCode === data.recipientCode);
  
  if (!recipient) {
    return {
      success: false,
      error: 'Destinataire non trouvé'
    };
  }
  
  const newMessage: Message = {
    id: crypto.randomUUID(),
    content: data.content,
    recipientCode: data.recipientCode,
    sentAt: new Date().toISOString(),
    isRead: false,
    isArchived: false
  };
  
  const messages = getMessages();
  messages.push(newMessage);
  saveMessages(messages);
  
  return {
    success: true,
    message: newMessage
  };
};

export const getMyMessages = async (): Promise<GetMessagesResponse> => {
  await delay(400);
  
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return {
      success: false,
      messages: [],
      unreadCount: 0
    };
  }
  
  const messages = getMessages()
    .filter(m => m.recipientCode === currentUser.linkCode)
    .sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime());
  
  const unreadCount = messages.filter(m => !m.isRead && !m.isArchived).length;
  
  return {
    success: true,
    messages,
    unreadCount
  };
};

export const markMessageAsRead = async (messageId: string): Promise<{ success: boolean }> => {
  await delay(200);
  
  const messages = getMessages();
  const messageIndex = messages.findIndex(m => m.id === messageId);
  
  if (messageIndex === -1) {
    return { success: false };
  }
  
  messages[messageIndex].isRead = true;
  saveMessages(messages);
  
  return { success: true };
};

export const archiveMessage = async (messageId: string): Promise<{ success: boolean }> => {
  await delay(200);
  
  const messages = getMessages();
  const messageIndex = messages.findIndex(m => m.id === messageId);
  
  if (messageIndex === -1) {
    return { success: false };
  }
  
  messages[messageIndex].isArchived = true;
  saveMessages(messages);
  
  return { success: true };
};

export const deleteMessage = async (messageId: string): Promise<{ success: boolean }> => {
  await delay(300);
  
  const messages = getMessages();
  const filteredMessages = messages.filter(m => m.id !== messageId);
  saveMessages(filteredMessages);
  
  return { success: true };
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const logout = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};