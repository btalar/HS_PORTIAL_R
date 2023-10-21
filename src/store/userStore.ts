import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserProps {
    email: string | null;
}

interface StoreProps {
    user: UserProps;
    setUser: (username: string) => void;
}

const initialState = { email: null };

export const userStore = create<StoreProps>()(
  devtools(persist((set) => ({
    user: { ...initialState },
    setUser: (username) => set(() => ({ user: { email: username } })),
  }), { name: 'state' })),
);
