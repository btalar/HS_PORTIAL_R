import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { reportWebVitals } from './reportWebVitals';
import { App } from './views';

/* istanbul ignore next */
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
/* istanbul ignore next */
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="*"
          element={(
            <App />
               )}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* istanbul ignore next */
reportWebVitals();
