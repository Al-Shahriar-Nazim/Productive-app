import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Download, Star, MessageSquare } from 'lucide-react';

const AppDetails = () => {
    const{id} = useParams()
    // console.log(id)
    const data = useLoaderData();
    // console.log(data)
    const appId = parseInt(id)
    const singleApp = data.find(app =>app.id === appId)
    console.log(singleApp)
    const{image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings}=singleApp;


  //   const ratings = [
  //   { star: 5, width: '85%' },
  //   { star: 4, width: '50%' },
  //   { star: 3, width: '25%' },
  //   { star: 2, width: '15%' },
  //   { star: 1, width: '8%' },
  // ];
    return (
 <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-100 p-6 rounded-lg">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Logo Area */}
          <div className="w-32 h-32 border-2 border-gray-100 rounded-xl flex items-center justify-center p-2 shrink-0">
             {/* Replace with your logo image */}
            <img src={image} alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* Title & Stats */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{title}: {description}</h1>
            <p className="text-blue-600 text-sm mb-6">Developed by {companyName}</p>

            <div className="flex flex-wrap gap-8 items-center mb-6">
              <div className="text-center">
                <Download className="w-5 h-5 text-green-500 mx-auto mb-1" />
                <p className="text-xs text-gray-400 uppercase font-bold">Downloads</p>
                <p className="text-xl font-bold">{downloads}</p>
              </div>
              <div className="text-center">
                <Star className="w-5 h-5 text-orange-400 mx-auto mb-1 fill-current" />
                <p className="text-xs text-gray-400 uppercase font-bold">Average Ratings</p>
                <p className="text-xl font-bold">{ratingAvg}</p>
              </div>
              <div className="text-center">
                <MessageSquare className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                <p className="text-xs text-gray-400 uppercase font-bold">Total Reviews</p>
                <p className="text-xl font-bold">{reviews}</p>
              </div>
            </div>

            <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded font-medium transition-colors text-sm">
              Install Now ({size})
            </button>
          </div>
        </div>

        <hr className="my-8 border-gray-100" />

        {/* Ratings Section */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Ratings</h2>
          <div className="space-y-3">
            {ratings.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <span className="text-xs text-gray-500 w-8">{item.name} </span>
                <div className="flex-1 bg-gray-100 h-6 rounded-sm overflow-hidden">
                  <div 
                    className="bg-orange-500 h-full transition-all duration-500" 
                    style={{ width: item.count}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Description</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. 
              Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions 
              and maximizing concentration.
            </p>
            <p>
              A unique feature of this app is the integration of task lists with timers. You can assign each task to 
              a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only 
              how much time you've worked but also which tasks consumed the most energy.
            </p>
            <p>
              For people who struggle with procrastination, the app provides motivational streaks and achievements. 
              Whether you're studying for exams, coding, writing, or handling office work, the app adapts to your routine.
            </p>
          </div>
        </div>

      </div>
    </div>
  
    );
};

export default AppDetails;