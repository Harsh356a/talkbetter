import React, { useState } from 'react';
import axios from 'axios';
import google from "../assets/search.png";
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://users.trainright.fit/api/users/login', {
        email,
        password,
        projectId: "664ece853e17537b70918cde"
      });
      console.log('Login successful', response.data);
      localStorage.setItem("UserDetails", JSON.stringify(response.data.profile));
      navigate('/')
    } catch (err) {
      console.error('Login error', err);
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 space-y-6 bg-zinc-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-400">VAPI</h1>
          <h2 className="text-2xl mt-2">Sign into your account</h2>
          <p className="text-zinc-400">Easily manage your autonomous voice assistants all in one dashboard.</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600">
            <img src={google} alt="Google" className=' h-10 w-10' />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-zinc-700 rounded-md text-white"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-400">Your Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-zinc-700 rounded-md text-white"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full p-3 bg-teal-500 rounded-md hover:bg-teal-600">Sign in</button>
        </form>

        <div className="text-center text-sm text-zinc-400">
          <p>Don't have an account? <Link to={"/register"} className="text-teal-500 hover:text-teal-600">Sign up</Link></p>
        </div>

        <p className="text-xs text-center text-zinc-600">
          By using Vapi you agree to our <a href="#" className="text-teal-500 hover:text-teal-600">Terms of Service</a>, <a href="#" className="text-teal-500 hover:text-teal-600">Privacy</a>, and <a href="#" className="text-teal-500 hover:text-teal-600">Security</a> policies and practices.
        </p>
      </div>
    </div>
  );
};

export default Login;
