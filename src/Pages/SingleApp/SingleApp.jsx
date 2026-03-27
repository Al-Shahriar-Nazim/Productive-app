import React from "react";

const SingleApp = ({ singleData }) => {
  const { description, title, image, ratingAvg, downloads } = singleData;
  return (
    <div
      className=" bg-white rounded-2xl p-3 shadow-md 
  transition-all duration-300 ease-in-out 
  hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
    >
      {/* Image Section */}
      <div className="bg-gray-200 rounded-xl h-44 flex items-center justify-center mb-3 overflow-hidden">
        <img
          src={image}
          alt="app"
          className="h-32 rounded-2xl object-contain transition-all duration-300 hover:scale-110"
        />
      </div>

      {/* Title */}
      <h2 className="text-sm text-left font-medium mb-2 transition-colors duration-300 hover:text-green-600">
        {title} : {description}
      </h2>

      {/* Bottom Info */}
      <div className="flex justify-between items-center text-xs">
        {/* Downloads */}
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md transition hover:scale-105">
          🌿 {downloads}
        </span>

        {/* Rating */}
        <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded-md transition hover:scale-105">
          ⭐ {ratingAvg}
        </span>
      </div>
    </div>
  );
};

export default SingleApp;
