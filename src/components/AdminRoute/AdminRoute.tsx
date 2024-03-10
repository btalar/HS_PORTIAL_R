import { Spinner } from '@nextui-org/react';
import React, { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { auth } from '../../config';
import { useUserStore } from '../../store';
import { LoaderWrapper } from './AdminRoute.styled';

export const AdminRoute: FC = () => {
  const navigate = useNavigate();
  const { role } = useUserStore((state) => state.user);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (!user) {
        navigate('/login');
      }
      if (role !== 'ADMIN') {
        console.log('is not Admin');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return loading ? <LoaderWrapper><Spinner size="lg" /></LoaderWrapper> : <Outlet />;
};
