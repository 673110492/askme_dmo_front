import { create } from 'zustand';
import { Message } from '../types/message';

interface AppState {
  messages: Message[];
  unreadCount: number;
  isLoading: boolean;
  error: string | null;
  setMessages: (messages: Message[]) => void;
  setUnreadCount: (count: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  markMessageAsRead: (messageId: string) => void;
  removeMessage: (messageId: string) => void;
}

export const useStore = create<AppState>((set) => ({
  messages: [],
  unreadCount: 0,
  isLoading: false,
  error: null,
  setMessages: (messages) => set({ messages }),
  setUnreadCount: (unreadCount) => set({ unreadCount }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  markMessageAsRead: (messageId) => set((state) => ({
    messages: state.messages.map(m => 
      m.id === messageId ? { ...m, isRead: true } : m
    ),
    unreadCount: Math.max(0, state.unreadCount - 1)
  })),
  removeMessage: (messageId) => set((state) => ({
    messages: state.messages.filter(m => m.id !== messageId)
  }))
}));