import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { UserProps } from '../types/UsersType';

interface StoreProps {
    user: UserProps ;
    setUser: (user: UserProps) => void;
    setRole: (userRole: 'ADMIN' | 'EDITOR'| 'CLIENT'| 'POD'| 'TV'| 'MOBILE') => void;
}

const initialState = { email: null, refreshToken: null };

export const useUserStore = create<StoreProps>()(
  devtools(persist((set) => ({
    user: { ...initialState },
    setUser: (user) => set(
      () => ({
        user:
        {
          email: user.email,
          userName: user.userName,
        },
      }),
    ),
    setRole: (userRole) => set((state) => ({
      user: {
        ...state.user,
        role: userRole,
      },
    })),

  }), { name: 'state' })),
);
