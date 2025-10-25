import React from "react";
import BookServiceForm from "../components/BookServiceForm";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
        
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Service Details Page
      </h1>
      <BookServiceForm />
    </div>
  );
};

export default Services;
