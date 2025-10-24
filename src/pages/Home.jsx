import React, { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import WinterCareTips from "../components/WinterCareTips";
import ExpertVets from "../components/ExpertVets";
import { Navigate, useNavigate } from "react-router";

const Home = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate(); // <-- useNavigate hook

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* 🧊 Hero Slider */}
      <HeroSlider />

      {/* 🐾 Popular Winter Care Services */}
      <section className="w-11/12 mx-auto my-10">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Popular Winter Care Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.serviceId}
              className="card bg-base-100 shadow-2xl hover:shadow-2xl transition-all duration-300"
            >
              <figure>
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-orange-500">
                  {service.serviceName}
                </h2>
                <p className="text-gray-700 font-medium">
                  <span className="text-yellow-500">★</span> {service.rating}
                </p>
                <p className="font-semibold text-gray-800">
                  Price: ${service.price}
                </p>
                <div className="card-actions flex justify-between items-center mt-3">
                  <span className="text-xl font-semibold text-blue-600">
                    {service.category}
                  </span>
                  <button
                    onClick={() => navigate(`/services/${service.serviceId}`)}
                    className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <WinterCareTips></WinterCareTips>
      <ExpertVets></ExpertVets>
    </div>
  );
};

export default Home;
