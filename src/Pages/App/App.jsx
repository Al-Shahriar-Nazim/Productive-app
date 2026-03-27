import React from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";

const App = () => {
  const data = useLoaderData()
  // console.log(data)
  return (
    <div className="container mx-auto mt-10 mb-3">
      <h3 className="text-5xl font-bold text-center">Our All Applications</h3>
      <p className="text-gray-500 mt-3 mb-10 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row space-y justify-between items-center">
        <h3 className="text-25px font-bold">(132) Apps Found</h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
        {
          data.map(singleData =><SingleApp key={singleData.id}  singleData={singleData}></SingleApp>)
        }
      </div>
    </div>
  );
};

export default App;
