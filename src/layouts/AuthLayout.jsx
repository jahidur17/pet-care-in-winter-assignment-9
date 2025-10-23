import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
      <div className="min-h-screen flex flex-col  bg-orange-50">
        <Navbar></Navbar>
        <div className="flex-grow flex justify-center items-center w-full">
          <Outlet />
        </div>
      </div>
    );
};

export default AuthLayout;