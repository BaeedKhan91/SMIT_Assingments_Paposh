// pages/Signup.jsx

import React, { useContext, useState } from "react";
import { expenseContext } from "../Context/TodoContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const { signup } = useContext(expenseContext);
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await signup(email,password);
      setLoading(false);
      navigate("/dashboard")


    } catch (error) {
      console.log("signup error--> " ,error);
      setLoading(false)
      
    }
  }

  return (
  
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-indigo-700 text-center mb-8">
          Create Account
        </h2>

        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-150"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-150"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-150"
            />

            <button className="w-full bg-indigo-600 text-white p-4 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out mt-2">
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className=" cursor-pointer text-indigo-600 font-bold hover:text-indigo-700">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
