import { FC } from 'react';
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'

import './style.css';

const browser = createBrowserRouter({
  
});

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
