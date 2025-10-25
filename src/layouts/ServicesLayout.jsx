import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

const ServicesLayout = () => {
    return (
      <div className="p-10">
        
          <Outlet></Outlet>
       
      </div>
    );
};

export default ServicesLayout;