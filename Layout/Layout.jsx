import React from 'react'
import {Outlet,useLocation} from 'react-router-dom';
import Footer from '../src/components/Footer.jsx';
import Header from '../src/components/Header.jsx';

function Layout() {
 const location = useLocation();
 const hideHeaderForPaths = ['/']
 const isHeaderAllowed = hideHeaderForPaths.includes(location.pathname);

  return (
    <>
    {!isHeaderAllowed &&<Header /> }
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout