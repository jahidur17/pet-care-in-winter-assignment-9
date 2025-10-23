import React from 'react';
import { Outlet } from 'react-router';

const ServicesLayout = () => {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold text-orange-600 text-center mb-6">
          Our Pet Care Services 🐾
        </h2>
        <Outlet />
      </div>
    );
};

export default ServicesLayout;