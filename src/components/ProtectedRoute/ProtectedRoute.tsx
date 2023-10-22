import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { userStore } from '../../store';

export const ProtectedRoute = () => {
  const location = useLocation();
  const { user } = userStore();
  return user ? (<Outlet />) : (<Navigate to="/login" state={{ from: location }} replace />);
};
