import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-orange-50">
        <Navbar></Navbar>
        <div>
          <Outlet />
        </div>
      </div>
    );
};

export default AuthLayout;