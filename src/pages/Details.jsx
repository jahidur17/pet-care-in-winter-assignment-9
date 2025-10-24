// src/pages/ServiceDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // /services/:id theke id
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.serviceId === parseInt(id));
        setService(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!service) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-4 text-orange-600">
        {service.serviceName}
      </h1>
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 mb-2">{service.description}</p>
      <p className="font-semibold">Category: {service.category}</p>
      <p className="font-semibold">Price: ${service.price}</p>
      <p className="text-yellow-500 font-semibold">Rating: {service.rating}</p>
    </div>
  );
};

export default Details;
