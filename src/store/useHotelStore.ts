import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { Hotel } from '../types/hotel';

interface SidebarStore {
    hotel:Hotel | null;
    onUpdateHotel:(hotel:Hotel) => void;
}

export const useHotelStore = create<SidebarStore>()(
  devtools(
    persist(
      (set) => ({
        hotel: null,
        onUpdateHotel: (updatedHotel) => set(() => ({ hotel: updatedHotel })),
      }),
      { name: 'bear-storage' },
    ),
  ),
);
