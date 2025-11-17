
import { create } from 'zustand';

interface ApplicationStore {
  isOpen: boolean;
  jobTitle: string | null;
  open: (jobTitle: string) => void;
  close: () => void;
}

export const useApplicationStore = create<ApplicationStore>((set) => ({
  isOpen: false,
  jobTitle: null,
  open: (jobTitle) => set({ isOpen: true, jobTitle }),
  close: () => set({ isOpen: false, jobTitle: null }),
}));
