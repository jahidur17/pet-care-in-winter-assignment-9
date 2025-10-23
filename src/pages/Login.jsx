import React, { useContext, useState,   } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
  

  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full border bg-red-600 border-gray-300 py-2 rounded-md hover:bg-gray-100"
        >
          Continue with Google
        </button>
        <p className="text-center text-sm mt-4">
          Don’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-orange-500 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
