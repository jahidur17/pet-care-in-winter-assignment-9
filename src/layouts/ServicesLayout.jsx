import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

const ServicesLayout = () => {
    return (
      <div className="p-10">
        <Suspense
          fallback={<p className="text-center text-gray-500">Loading...</p>}
        >
          <Outlet />
        </Suspense>
      </div>
    );
};

export default ServicesLayout;