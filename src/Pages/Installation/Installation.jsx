import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/addToDB";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaFilter } from "react-icons/fa";

const Installation = () => {
  const [app, setApp] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  // console.log(data)
  useEffect(() => {
    const storedAppData = getStoredApp();
    // console.log(storedAppData)
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));
    // console.log(convertedStoredApps)
    const myInstallApp = data.filter((app) =>
      convertedStoredApps.includes(app.id),
    );
    // console.log(myInstallApp)
    setApp(myInstallApp);
  }, [data]);
  //   console.log(app);

  const handleSort = (type) => {
    setSort(type);
    if (type === "size") {
      const sortBySize = [...app].sort((a, b) => a.size - b.size);
    //   console.log(sortBySize);
      setApp(sortBySize);
    } else if (type === "rating") {
      const sortByRating = [...app].sort((a, b) => a.rating- b.rating);
      console.log(sortByRating)
      setApp(sortByRating);
    }
  };
  return (
    <div className="container mx-auto">
      <div>
        <h3 className="text-5xl font-bold text-center mt-10 mb-5">
          Your Installed Apps
        </h3>
        <p className="text-[18px] text-gray-400 text-center mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold mb-4">1 Apps Found</h3>
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By {sort ? sort : ""} <FaFilter />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("size")}>Size</a>
              </li>
              <li>
                <a onClick={() => handleSort("rating")}>Rating</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-5">
        {app.map((app) => (
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100  mx-auto mb-4">
            {/* Left Side: Logo and Details */}
            <div className="flex items-center gap-4">
              {/* Logo Placeholder */}
              <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0">
                <img src={app.image} alt="" />
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-800 font-semibold text-lg leading-tight">
                  {app.title}: {app.description}
                </h3>
                <div className="flex items-center gap-3 text-sm text-emerald-500 font-medium">
                  <span className="flex items-center gap-1">
                    <LiaDownloadSolid /> {app.downloads}
                  </span>
                  <span className="flex items-center gap-1">
                    ⭐ {app.ratingAvg}
                  </span>
                  <span className="text-gray-400">{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* Right Side: Uninstall Button */}
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
