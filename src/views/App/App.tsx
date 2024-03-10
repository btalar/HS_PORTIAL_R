import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AdminRoute, Layout, ProtectedRoute } from '../../components';
import { UserManagement } from '../Admin/UserManagement';
import { Dashboard } from '../Dashboard';
import { Events } from '../Events';
import { LoginPage } from '../LoginPage';
// import { NewEvent } from '../NewEvent';

export const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout><ProtectedRoute /></Layout>}>
        <Route element={<AdminRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="user-management" element={<UserManagement />} />
        </Route>
        <Route path="events" element={<Events />} />
      </Route>
      {/* <Route path="user-management" element={<UserManagement />} /> */}

      {/* <Route path="events/new" element={<NewEvent />} /> */}
    </Routes>
  </Router>
);
