import './index.css';

import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { App } from './views';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route
          path="*"
          element={(
            <NextUIProvider>
              <App />
            </NextUIProvider>
            )}
        />
      </Routes>
    </Router>

  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
