// pages/Login.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-indigo-700 text-center mb-8">
          Welcome Back
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-150"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-150"
          />

          <button className="w-full bg-indigo-600 text-white p-4 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out mt-2">
            Log In
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
            <Link to={"/signup"}>
            <span className="text-indigo-600 font-bold hover:text-indigo-700">
              Signup
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}