import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {LogIn} from './pages/main.jsx';
import {NewPassword} from './pages/new_password.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>
  }
  ,
  {
    path: "/olvidar_contraseña",
    element: <NewPassword/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

