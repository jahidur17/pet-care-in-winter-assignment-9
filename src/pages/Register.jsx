import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { registerUser, updateUserProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    //  console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    //  console.log({ name, photo, email, password });
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(password)){
      // console.log("password don mached")
      setError(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
        return;
    }

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        //    console.log(user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
            setError(user);
          });
      })
      .catch((error) => {
        //    const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
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

  const handleTogglePasswordShow = (e) =>{
     e.preventDefault();
     setShowPassword(!showPassword);
  }

  return (
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full border rounded-md px-3 py-2"
            required
          />
          <button
            onClick={handleTogglePasswordShow}
            className="btn btn-xs absolute top-2 right-2"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md"
        >
          Register
        </button>
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        onClick={handleGoogleLogin}
        className="mt-4 w-full border bg-red-600 border-gray-300 py-2 rounded-md hover:bg-gray-100"
      >
        Continue with Google
      </button>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-orange-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
