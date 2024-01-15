import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface RightSidebarStore {
    id:null|string;
    setId:(id:string) => void;
    clearId:()=>void;
}

export const useRightSidebar = create<RightSidebarStore>()(
  devtools(
    persist(
      (set) => ({
        id: null,
        setId: (id) => set(
          () => ({ id }),
        ),
        clearId: () => set(
          () => ({ id: null }),
        ),
      }),
      { name: 'right-sidebar' },
    ),
  ),
);
