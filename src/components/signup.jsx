import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, password } = formData;

  const userData = { name, email, password };
  localStorage.setItem("user", JSON.stringify(userData));           // save registered user
  localStorage.setItem("loggedInUser", JSON.stringify(userData));   // also login immediately

  navigate("/");
};


  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="w-full max-w-md bg-white text-gray-800 p-8 rounded-2xl shadow-md relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-black hover:opacity-80"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Sign In to Continue
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 border px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 border px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <p className="text-xs text-gray-600">
            By registering, you agree to our{" "}
            <span className="underline">Terms & Conditions</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold rounded-md py-3 hover:scale-105 transition-all"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an{" "}
            <a className="underline" href="/login">
              account
            </a>
            ?
          </p>
        </div>
      </section>
    </section>
  );
}
