import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '../../components';
import { Admin } from '../Admin';
import { Dashboard } from '../Dashboard';
import { Events } from '../Events';
import { LoginPage } from '../LoginPage';
import { Pod } from '../Pod';
import { Settings } from '../Settings';

export const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="pod" element={<Pod />} />
        <Route path="admin" element={<Admin />} />
        <Route path="settings" element={<Settings />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  </Router>
);
