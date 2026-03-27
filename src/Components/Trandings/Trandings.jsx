import React, { Suspense } from "react";
import Tranding from "../Tranding/Tranding";
import { Link } from "react-router";

const Trandings = ({ data }) => {
  // console.log(data)

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-4xl font-bold">Trending Apps</h3>
        <p className="text-[18px] text-gray-500 font-semibold mt-2 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <Suspense>
          {data.map((singleTrand) => (
            <Tranding key={singleTrand.id} singleTrand={singleTrand}></Tranding>
          ))}
        </Suspense>
      </div>
      <div className="container mx-auto w-full mb-10">
        <Link
          to="/app"
          className="btn mx-auto bg-linear-to-r from-violet-700 to-violet-400 text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Trandings;
