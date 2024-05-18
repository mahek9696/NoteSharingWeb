import React from "react";
import { Link } from "react-router-dom";
import logo from "../Media/notes6.png";

const HomeCard = ({ name, image, category, price, file, loading, id }) => {
  return (
    <div className="bg-sky-400 shadow-md p-2 rounded-lg min-w-[150px] ">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="w-40 min-h-[150px] px-5 p-3">
              {/* <img src={image} className="h-full w-full" /> */}
              <img src={logo} className="h-full w-full bg-sky-400" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
              {name}
            </h3>
            <p className="text-center text-slate-500 font-medium">{category}</p>
            {/* <p className="text-center font-bold">
              <span className="text-red-500">Unit </span>
              <span> : {price}</span>
            </p> */}
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full min-h-[170px]">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
