import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    ssn: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in localStorage
    localStorage.setItem("userFormData", JSON.stringify(formData));

    // Set 3-day countdown timestamp
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3);
    localStorage.setItem("formDeadline", deadline.toISOString());

    // Redirect to home
    navigate("/payment");
  };

  return (
    <section className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-6 space-y-6 bg-trump-background shadow-md rounded-md"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-trump-heading">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2.5 border border-trump-dark rounded-md text-sm focus:ring-trump-primary focus:border-trump-primary"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-trump-heading">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2.5 border border-trump-dark rounded-md text-sm focus:ring-trump-primary focus:border-trump-primary"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-trump-heading">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2.5 border border-trump-dark rounded-md text-sm focus:ring-trump-primary focus:border-trump-primary"
              placeholder="(123) 456-7890"
            />
          </div>

          {/* House Address */}
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-trump-heading">
              House Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2.5 border border-trump-dark rounded-md text-sm focus:ring-trump-primary focus:border-trump-primary"
              placeholder="123 Main Street, Apt 4B"
            />
          </div>

          {/* ZIP Code */}
          <div>
            <label htmlFor="zip" className="block mb-2 text-sm font-medium text-trump-heading">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              required
              maxLength="5"
              pattern="\d{5}"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-2.5 border border-trump-dark rounded-md text-sm focus:ring-trump-primary focus:border-trump-primary"
              placeholder="90210"
            />
          </div>

          {/* SSN */}
          <div>
            <label htmlFor="ssn" className="block mb-2 text-sm font-medium text-trump-heading">
              Social Security Number (SSN)
            </label>
            <input
              type="text"
              id="ssn"
              name="ssn"
              required
              pattern="\d{3}-\d{2}-\d{4}"
              value={formData.ssn}
              onChange={handleChange}
              className="w-full p-2.5 border border-trump-dark rounded-md text-sm focus:ring-trump-primary focus:border-trump-primary"
              placeholder="123-45-6789"
            />
            <p className="text-xs text-trump-dark mt-1">Format: 123-45-6789</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-trump-primary text-white py-2 px-4 rounded-md hover:bg-trump-dark transition bg-teal-600"
          >
            Submit
          </button>
        </form>
      </main>

      <Footer />
    </section>
  );
}

export default Form;
