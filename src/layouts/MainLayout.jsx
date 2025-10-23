import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <nav>
          <Navbar></Navbar>
        </nav>
        <main className=" p-4">
          <Outlet></Outlet>
        </main>
        <footer></footer>
      </div>
    );
};

export default MainLayout;