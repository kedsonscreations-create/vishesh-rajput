import { create } from 'zustand';
import type { Channel, ContentIdea, User } from '@/types';

interface Store {
  user: User | null;
  setUser: (user: User) => void;
  
  channel: Channel | null;
  setChannel: (channel: Channel) => void;
  
  contentIdeas: ContentIdea[];
  addContentIdea: (idea: ContentIdea) => void;
  removeContentIdea: (id: string) => void;
  clearContentIdeas: () => void;
  
  darkMode: boolean;
  toggleDarkMode: () => void;
  
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  
  channel: null,
  setChannel: (channel) => set({ channel }),
  
  contentIdeas: [],
  addContentIdea: (idea) =>
    set((state) => ({
      contentIdeas: [...state.contentIdeas, idea],
    })),
  removeContentIdea: (id) =>
    set((state) => ({
      contentIdeas: state.contentIdeas.filter((idea) => idea.id !== id),
    })),
  clearContentIdeas: () => set({ contentIdeas: [] }),
  
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
