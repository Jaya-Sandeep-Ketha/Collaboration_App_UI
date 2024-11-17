
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../Layout/Layout.jsx'
import Landing from './components/LandingPage/Landing.jsx';
import AdminHome from './components/Admin/AdminHome.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Landing/>} />
      <Route path="/admin" element={<AdminHome/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
