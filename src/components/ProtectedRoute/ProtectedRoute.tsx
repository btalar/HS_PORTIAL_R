import { Spinner } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { auth } from '../../config';
import { LoaderWrapper } from './ProtectedRoute.styled';

export const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return loading ? <LoaderWrapper><Spinner size="lg" /></LoaderWrapper> : <Outlet />;
};
