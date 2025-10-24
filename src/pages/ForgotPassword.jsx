import React, { useRef, useState, useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation } from "react-router";

const ForgotPassword = () => {
  const emailRef = useRef(null);
  const { forgotPassword } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const emailFromLogin = location.state?.email || "";

  useEffect(() => {
    if (emailRef.current && emailFromLogin) {
      emailRef.current.value = emailFromLogin;
    }
  }, [emailFromLogin]);

   const handlePasswordReset = (e) => {
     e.preventDefault();
     const email = emailRef.current.value.trim();
     if (!email) {
       setError("Please enter your email!");
       return;
     }

     forgotPassword(email)
       .then(() => setMessage("✅ Reset email sent! Check your inbox."))
       .catch((err) => setError(err.message));
   };


  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card w-full max-w-sm shadow-2xl p-5">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Reset Password
        </h1>
        <form onSubmit={handlePasswordReset}>
          <label> Email</label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Your email"
            className="input"
            required
          />
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="btn btn-neutral mt-4">
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center flex gap-2 justify-center ">
          Back to
          <Link to="/auth/login" className="text-secondary ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
