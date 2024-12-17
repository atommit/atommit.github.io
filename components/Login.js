import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
	<div className="flex items-center justify-center min-h-screen bg-gray-50">
	  <div className="bg-white p-8 rounded-lg shadow-md w-96">
		<h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
		  Atomize It!
		</h2>
		<h3 className="text-lg font-semibold mb-6 text-gray-700">Log In</h3>
		<form>
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
			  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
			  required
			/>
			<span
			  className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
			  onClick={() => setShowPassword(!showPassword)}
			>
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
		  </div>
		  <div className="flex justify-between items-center mb-6 text-sm">
			<label className="flex items-center text-gray-600">
			  <input type="checkbox" className="mr-2" />
			  Keep me logged-in
			</label>
			<a href="#" className="text-indigo-600 hover:underline">
			  Forgot password?
			</a>
		  </div>
		  <button
			type="submit"
			className="w-full bg-indigo-800 text-white py-2 rounded-md hover:bg-indigo-700 transition"
		  >
			Log In
		  </button>
		</form>
		<p className="text-center mt-4 text-sm text-gray-600">
		  <a href="#" className="text-indigo-600 hover:underline">
			Create Account
		  </a>
		</p>
	  </div>
	</div>
  );
};

export default Login;