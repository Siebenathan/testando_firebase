import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
]);

export const App: FC<{ name: string }> = ({ name }) => {
  return <RouterProvider router={browser}></RouterProvider>;
};
