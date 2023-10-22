import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserProps {
    email: string | null;
    refreshToken: string |null;
}

interface StoreProps {
    user: UserProps;
    setUser: (user: any) => void;
}

const initialState = { email: null, refreshToken: null };

export const userStore = create<StoreProps>()(
  devtools(persist((set) => ({
    user: { ...initialState },
    setUser: (user) => set(
      () => ({
        user:
          {
            email: user.email,
            refreshToken: user.stsTokenManager.refreshToken,
          },
      }),
    ),

  }), { name: 'state' })),
);
