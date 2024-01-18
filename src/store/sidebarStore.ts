import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SidebarStore {
    isSidebarOpen:boolean;
    toggle:() => void;
    open:() => void;
    hide:() => void;
}

export const sidebarStore = create<SidebarStore>()(
  devtools(
    persist(
      (set) => ({
        isSidebarOpen: false,
        hide: () => set(
          () => ({ isSidebarOpen: false }),
        ),
        open: () => set(
          () => ({ isSidebarOpen: true }),
        ),
        toggle: () => set(
          (state) => ({ isSidebarOpen: !state.isSidebarOpen }),
        ),
      }),
      { name: 'sidebar' },
    ),
  ),
);
