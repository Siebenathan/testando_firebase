import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateAccountPage from './pages/CreateAccountPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import './style.css';

const browser = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/criar-conta',
    element: <CreateAccountPage />,
  },
]);

export const App: FC<{ name: string }> = ({ name }) => {
  return <RouterProvider router={browser}></RouterProvider>;
};
