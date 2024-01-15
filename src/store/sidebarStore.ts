import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SidebarStore {
    isOpen:boolean;
    toggle:() => void;
    open:() => void;
    hide:() => void;
}

export const sidebarStore = create<SidebarStore>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        hide: () => set(
          () => ({ isOpen: false }),
        ),
        open: () => set(
          () => ({ isOpen: true }),
        ),
        toggle: () => set(
          (state) => ({ isOpen: !state.isOpen }),
        ),
      }),
      { name: 'sidebar' },
    ),
  ),
);
