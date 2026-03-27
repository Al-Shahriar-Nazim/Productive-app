import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 mb-10 ">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Trusted By Millions, Built For You
      </h2>

      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center">
        {/* Item 1 */}
        <div>
          <p className="text-sm opacity-80">Total Downloads</p>
          <h3 className="text-3xl font-bold mt-2">29.6M</h3>
          <p className="text-xs opacity-70 mt-1">25% More Than Last Month</p>
        </div>

        {/* Item 2 */}
        <div>
          <p className="text-sm opacity-80">Total Reviews</p>
          <h3 className="text-3xl font-bold mt-2">906K</h3>
          <p className="text-xs opacity-70 mt-1">21% More Than Last Month</p>
        </div>

        {/* Item 3 */}
        <div>
          <p className="text-sm opacity-80">Active Apps</p>
          <h3 className="text-3xl font-bold mt-2">132+</h3>
          <p className="text-xs opacity-70 mt-1">31 More Than Last Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
