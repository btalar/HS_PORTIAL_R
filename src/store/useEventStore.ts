import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface EventStore {
    active:'calendar'|'table';
    setActive:(active:'calendar'|'table') => void;
}

export const useEventStore = create<EventStore>()(
  devtools(
    persist(
      (set) => ({
        active: 'table',
        setActive: (active) => set(() => ({ active })),
      }),
      { name: 'event' },
    ),
  ),
);
