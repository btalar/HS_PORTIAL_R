import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebase';

export const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <Outlet />;
};
