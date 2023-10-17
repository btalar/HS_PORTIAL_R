// import { Route, Routes } from 'react-router-dom';
//
// import { Dashboard } from '../Dashboard';
// import { Login } from '../Login';
import { FC } from 'react';

const myVariable = process.env.REACT_APP_MY_VARIABLE;
export const App: FC = () => (
  <h1>Heroku Release Version: {myVariable} </h1>
);
