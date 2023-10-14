import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../Dashboard';
import { Login } from '../Login';

export const App: FC = () => (
  <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path="/" element={<Dashboard />} />
  </Routes>
);
