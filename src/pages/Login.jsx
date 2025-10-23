// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    
     loginUser(email, password)
     .then(result =>{
      console.log(result.user)
       navigate("/");
     })
     .catch (err=>{
        setError(err.message);
     }) 
     
     
    
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">
          Welcome Back 🐾
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          New here?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
