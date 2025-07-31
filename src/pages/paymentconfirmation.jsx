// src/pages/PaymentConfirmation.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

export default function PaymentConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">
          Payment Being Processed
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Please allow up to{" "}
          <span className="font-medium">3 business working days</span> for
          confirmation.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
