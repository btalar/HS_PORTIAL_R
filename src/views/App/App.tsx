// import { Route, Routes } from 'react-router-dom';
//
// import { Dashboard } from '../Dashboard';
// import { Login } from '../Login';
import { FC } from 'react';

const herokuReleaseVersion = window.HEROKU_RELEASE_VERSION;

export const App: FC = () => (
  <h1>Heroku Release Version: {herokuReleaseVersion}</h1>
);
