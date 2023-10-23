import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '../../components';
import { Dashboard } from '../Dashboard';
import { LoginPage } from '../LoginPage';

export const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
);
