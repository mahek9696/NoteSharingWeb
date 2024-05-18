import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProducts from "../MyComponent/AllProducts";
import { addCartItem } from "../redux/productSlice";
import { PiListPlusBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import  AddToCartButton  from "../MyComponent/elements/AddToCartButton"

const Menu = () => {

  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };
  return (
    <div className=" p-2 md:p-4">
      <div className="w-full max-w-4xl  m-auto md:flex bg-white ">
        <div className=" max-w-sm p-7 overflow-hidden w-full">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col pt-10 pl-10 gap-4 p-4 ">
          <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-2xl">
            {productDisplay.name}
          </h3>
          <p className=" text-slate-500 font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className=" font-bold">
            <span className="text-red-500">Unit </span>
            <span> : {productDisplay.price}</span>
          </p>
          {/* <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-2xl">
            {productDisplay.file}
          </h3> */}


          {/* <Link to={productDisplay.file} >
            <button
              className="bg-sky-300 hover:bg-sky-400 py-2 my-2 mt-2 px-8 rounded justify-center items-center  rounded "
            >
              <PiListPlusBold />
            </button>
          </Link> */}

          <div className="flex gap-2 w-full">
            {/* <button className="bg-yellow-400 hover:bg-yellow-500 min-w-[100px] min-h-[30px] rounded ">
              Buy
            </button> */}
            <a target="_blank" href={productDisplay.file}>
              <button
                className="bg-sky-300 p-2  m-2 rounded justify-center items-center rounded w-3/4"
              >
                <FaRegEye className="m-1" />
              </button> 
            </a>

            <AddToCartButton product={productDisplay} className=""/>

            {/* <button
              onClick={handleAddCartProduct}
              className="bg-sky-300 hover:bg-sky-400 py-2 my-2 mt-2 px-8 rounded justify-center items-center  rounded "
            >
              <PiListPlusBold />
            </button> */}
          </div>
          <div className="gap-4">
            <p className="text-slate-500">Description :</p>

            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProducts heading={"Related Products"} />
    </div>
  );
};

export default Menu;
