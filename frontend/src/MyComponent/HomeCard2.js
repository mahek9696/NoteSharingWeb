import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaRegEye } from "react-icons/fa"
import { Link } from "react-router-dom";

import { PiListPlusBold } from "react-icons/pi";
import  AddToCartButton  from "./elements/AddToCartButton"

const HomeCard2 = ({ product ,loading}) => {

  return (
    <div className="bg-slate-200 shadow-md p-2 rounded-lg min-w-[150px] flex justify-center items-center flex-col items-center cursor-pointer items-center">
      {product && product.name ? (
        <>
          <div className="w-40 min-h-[150px] min-w-[150px] p-2 flex justify-center items-center flex-col items-center ">
            <Link
              to={`/menu/${product._id}`}
              onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
            >
              <img src={product.image} className=" flex object-covermd:h-auto md:w-48 justify-center items-center flex-col items-center h-[150px] w-40 "/>
            </Link>
          </div>
          <Link
            to={`/menu/${product._id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg flex justify-center items-center flex-col items-center whitespace-nowrap overflow-hidden">
              {product.name}
            </h3>
            {/* <p className="text-center text-slate-500 font-medium">{category}</p> */}
            <p className="text-center font-bold">
              {/* <span className="text-black-500">Unit </span> */}
              {/* <span> : {product.price}</span> */}
            </p>
          </Link>
          <div className="">
            <AddToCartButton product={product} />
            </div>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[170px]">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard2;
