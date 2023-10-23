import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebase';

export const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();

  if (!auth.currentUser) {
    navigate('/login');
  }

  return (
    <Outlet />
  );
};
