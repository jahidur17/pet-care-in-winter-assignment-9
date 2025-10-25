import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, signInWithGoogle, setUser, setLoading } =
    useContext(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);

        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleTogglePasswordShow = (e) => {
    setLoading(true);
    e.preventDefault();
    setShowPassword(!showPassword);
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
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button
                onClick={handleTogglePasswordShow}
                className="btn btn-xs absolute top-6.5 right-6"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <Link
                to="/auth/forgot-password"
                state={{ email }}
                className="link link-hover"
              >
                Forgot password?
              </Link>
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
