import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';



const router =createBrowserRouter(
 createRoutesFromElements(
  <>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login  />}/>
  <Route path='/user' element={<PrivateRoute/>}>
    <Route path='dashboard' element={<Dashboard/>}/>
  </Route>
  </>
 ) )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>
);