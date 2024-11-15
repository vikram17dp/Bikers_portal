import React, { useState, useContext } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/register`, {
        name,
        email,
        password,
      });
      if (response.data.success) {
        toast.success('Sign up successful! You can log in now.');
        
          navigate('/signin');  
      } else {
        toast.error(response.data.message || 'Sign up failed.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-500">
            Sign up for an account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSignUp}>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm border border-gray-300 ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 text-base border-gray-300 rounded-md py-2 focus:outline-none"
                placeholder="Your Full Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm border border-gray-300 ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 text-base border-gray-300 rounded-md py-2 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm border border-gray-300 ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 text-base border-gray-300 rounded-md py-2 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
