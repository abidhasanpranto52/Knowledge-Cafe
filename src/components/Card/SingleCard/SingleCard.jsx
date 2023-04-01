import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleCard = ({ SingleData, handleMarkRead, handleBookmark }) => {
  const { picture, profile_image, name, read_time, title, _id } = SingleData;
  return (
    <div className="w-[370px]  lg:w-fit space-y-5 p-5 lg:p-0 ">
      <img className="lg:w-[550px]  rounded-md" src={picture} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex ">
          <img className="w-[44px] rounded-full " src={profile_image} alt="" />
          <div className="ml-3">
            <h1 className="lg:text-xl text-lg font-semibold">{name}</h1>
            <h1 className="text-xs font-medium text-slate-600">
              Mar 14 (4 Days ago)
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-sm lg:text-base text-slate-600 font-medium">
            {read_time} Min read
            <span>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => handleBookmark(_id)}
                className="w-6 h-6 inline cursor-pointer">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
          </h1>
        </div>
      </div>
      <h1 className="lg:text-3xl text-lg lg:w-[440px] font-bold text-slate-800 ">{title}</h1>
      <p className="text-slate-700 font-semibold text-sm">#beginner #programming</p>
      <button
        onClick={() => handleMarkRead(_id)}
        className="underline text-blue-700 font-semibold opacity-80">
        Mark as read
      </button>
      <ToastContainer />
    </div>
  );
};

export default SingleCard;
