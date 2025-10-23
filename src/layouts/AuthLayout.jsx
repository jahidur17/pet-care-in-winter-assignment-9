import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
      <div className="min-h-screen flex flex-col  bg-orange-50">
        <div className='py-3'>
          <Navbar></Navbar>
        </div>
        <div className="flex-grow flex justify-center items-center w-full py-10">
          <Outlet />
        </div>
        <div className="py-7">
          <Footer>
            
          </Footer>
        </div>
      </div>
    );
};

export default AuthLayout;