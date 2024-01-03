import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SidebarStore {
    isOpen:boolean;
    toggle:() => void;
}

export const sidebarStore = create<SidebarStore>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        toggle: () => set(
          (state) => {
            console.log(state);
            return ({ isOpen: !state.isOpen });
          },
        ),
      }),
      { name: 'bear-storage' },
    ),
  ),
);