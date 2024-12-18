import React, { useState } from "react";
import {FiEye, FiEyeOff, FiX} from "react-icons/fi";

export default function CreateAccount  ({navigate})  {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
	e.preventDefault();
	if (password !== repeatPassword) {
	  setError("Passwords do not match!");
	} else {
	  setError("");
	  alert("Account Created Successfully!");
	  // todo form submission logic here
	}
  };

  return (
	<div className="flex items-center justify-center min-h-screen bg-gray-50">
	  <div className="relative bg-white p-8 rounded-lg shadow-md w-96">
		<span
		  onClick={() => navigate("welcome")}
		  className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-600"
		>
          <FiX size={24}/>
        </span>
		<h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
		  Join Us
		</h2>
		<h3 className="text-lg font-semibold mb-6 text-gray-700">
		  Create Account
		</h3>
		<form onSubmit={handleSubmit}>
		  <div className="mb-4">
			<input
			  type="text"
			  placeholder="Organization Name"
			  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
			  required
			/>
		  </div>
		  <div className="mb-4">
			<input
			  type="email"
			  placeholder="Email"
			  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
			  required
			/>
		  </div>
		  <div className="mb-4 relative">
			<input
			  type={showPassword ? "text" : "password"}
			  placeholder="Password"
			  value={password}
			  onChange={(e) => setPassword(e.target.value)}
			  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
			  required
			/>
			<span
			  className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
			  onClick={() => setShowPassword(!showPassword)}
			>
              {showPassword ? <FiEyeOff size={20}/> : <FiEye size={20}/>}
            </span>
		  </div>
		  <div className="mb-4 relative">
			<input
			  type={showRepeatPassword ? "text" : "password"}
			  placeholder="Repeat Password"
			  value={repeatPassword}
			  onChange={(e) => setRepeatPassword(e.target.value)}
			  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
			  required
			/>
			<span
			  className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
			  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
			>
              {showRepeatPassword ? <FiEyeOff size={20}/> : <FiEye size={20}/>}
            </span>
		  </div>
		  {error && (
			<p className="text-red-500 text-sm mb-4">{error}</p>
		  )}
		  <button
			type="submit"
			className="w-full bg-indigo-800 text-white py-2 rounded-md hover:bg-indigo-700 transition"
		  >
			Create Account
		  </button>
		</form>
		<p className="text-center mt-4 text-sm text-gray-600">
		  <div
			onClick={() => navigate("login")}
			className="text-indigo-600 hover:underline cursor-pointer">
			Log In
		  </div>
		</p>
	  </div>
	</div>
  );
};


