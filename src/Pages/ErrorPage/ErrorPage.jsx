import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      {/* Image */}
      <img
        src={errorImg}
        alt="404 Error"
        className="w-72 mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Oops, page not found!
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;