import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../Dashboard';
import { LoginPage } from '../LoginPage';

export const App: FC = () => (
  <Routes>
    <Route path="/login" element={(<LoginPage />)} />
    <Route path="/" element={(<Dashboard />)} />
  </Routes>
);
