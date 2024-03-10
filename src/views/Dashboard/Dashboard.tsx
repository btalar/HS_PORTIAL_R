import { FC } from 'react';

import { useUserStore } from '../../store';

export const Dashboard: FC = () => {
  const { email } = useUserStore((state) => state.user);

  return (
    <div>
      <h1>Dashboard {email}   </h1>
    </div>

  );
};
