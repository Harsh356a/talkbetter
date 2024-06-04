import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import google from "../assets/search.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
    status: true,
    password: "",
    projectId: "664ece853e17537b70918cde",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (Object.values(formData).some((value) => !value)) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://users.trainright.fit/api/users/signUp",
        formData
      );
      console.log(response.data);
      alert("Sign Up Successful");
      navigate("/login");
    } catch (error) {
      console.error("There was an error signing up!", error);
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
        alert("Sign Up Failed: " + error.response.data.message);
      } else {
        alert("Sign Up Failed");
      }
    }
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 space-y-6 bg-zinc-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-400">VAPI</h1>
          <h2 className="text-2xl mt-2">Create your account</h2>
          <p className="text-zinc-400">
            Easily manage your autonomous voice assistants all in one dashboard.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600">
            <img src={google} alt="Google" className=" h-10 w-10" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 bg-zinc-700 rounded-md text-white"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-400"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 bg-zinc-700 rounded-md text-white"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-400"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 bg-zinc-700 rounded-md text-white"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-teal-500 rounded-md hover:bg-teal-600"
          >
            Sign up
          </button>
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </form>

        <div className="text-center text-sm text-zinc-400">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500 hover:text-teal-600">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-xs text-center text-zinc-600">
          By using Vapi you agree to our{" "}
          <a href="#" className="text-teal-500 hover:text-teal-600">
            Terms of Service
          </a>
          ,{" "}
          <a href="#" className="text-teal-500 hover:text-teal-600">
            Privacy
          </a>
          , and{" "}
          <a href="#" className="text-teal-500 hover:text-teal-600">
            Security
          </a>{" "}
          policies and practices.
        </p>
      </div>
    </div>
  );
};

export default Register;
