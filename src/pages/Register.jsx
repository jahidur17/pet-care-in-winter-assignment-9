// src/pages/Register.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await registerUser(email, password);
      await updateUserProfile(name, photo);
      console.log("Registered User:", result.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">
          Join WarmPaws 🐶
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border rounded-md px-3 py-2"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-md px-3 py-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-md px-3 py-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md"
          >
            Register
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
