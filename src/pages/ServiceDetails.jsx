import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const ServiceDetails = () => {
  const { id } = useParams(); 
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (!user) {
      navigate("/auth/login", { state: { from: location.pathname } });
    }
  }, [user, navigate, location]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => String(item.serviceId) === id);
        setService(selected);
      })
      .catch(() => toast.error("Failed to load service details"));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill out all fields!");
      return;
    }
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!service) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{service.serviceName}</h1>
      <img
        src={service.image}
        alt={service.serviceName}
        className="rounded-xl shadow-md mb-4 w-full h-64 object-cover"
      />
      <p className="text-gray-700 mb-2">
        <strong>Rating:</strong> {service.rating} ★
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Price:</strong> ${service.price}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Category:</strong> {service.category}
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Description:</strong> {service.description}
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow space-y-3"
      >
        <h2 className="text-2xl font-semibold mb-3">Book Service</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ServiceDetails;
