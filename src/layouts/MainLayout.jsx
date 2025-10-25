import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import { useNavigation } from 'react-router';
import Loading from '../pages/Loading';
const MainLayout = () => {
  const {state}=useNavigation
    return (
      <div className="min-h-screen flex flex-col">
        <nav>
          <Navbar></Navbar>
        </nav>
        <main className=" p-4">
          {state =='loading' ?<Loading/> : <Outlet></Outlet>}
          <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
      </div>
    );
};

export default MainLayout;