import React, { useEffect, useState } from "react";
import img from "../Media/front3.png";
import HomeCard from "../MyComponent/HomeCard";
import { useSelector } from "react-redux";
import CardFeatures from "../MyComponent/CardFeatures";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useRef } from "react";
import AllProducts from "../MyComponent/AllProducts";
import Contact from "../Pages/Contact";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  //console.log(productData);
  const homeProductCartList = productData.slice(0, 3);
  const homeProductCartListDryFruits = productData.filter(
    (el) => el.category === "sem-1" || "sem-2"|| "sem-3"|| "sem-4"|| "sem-5"|| "sem-6",
    []
  );
  //console.log(homeProductCartListDryFruits);
  const loadingArray = new Array(3).fill(null);
  const loadingArrayFeatures = new Array(6).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4 ">
      {/* left  section */}
      <div className="md:flex gap-4 py-2">
         
        <div className="md:w-5/6">
          <br/>
          <br/>
          <br/>
         <br/>
          <div className="flex justify-center p-5 gap-5 px-4 items-center rounded-full">
            <p className="text-7xl text-blue-950 bg-clip-text font-mono font-bold py-3">"</p>
             <br/>
             <br/>
            <img src={img} className="flex h-30 w-40 " />
            <p className="text-7xl text-blue-950 bg-clip-text font-mono font-bold py-3 px-2"> is Power "</p>
          </div>
          <br/>
          <br/>
          <h2 className="text-center text-6xl md:text-6xl text-sky-200 bg-clip-text font-sans font-bold py-3">
           The most fulfilling aspect of sharing notes comes when they are valued and leveraged by others. {" "}
    
          </h2>
          <br/>
          <br/>
          <p className="py-3 font-sans font-bold md:text-2xl">
            <h2 className="text-6xl md:text-5xl  from-sky-400 via-sky-700 to-sky-600 bg-gradient-to-r bg-clip-text text-transparent font-sans font-bold py-3">
           </h2>
            <p className="text-gray-400">
              
            </p>
          </p>
          <br />
        </div>
        {/* right section */}
        <div className="flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading...."} />
                );
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            <br/>
            <br/>
            <br/>
            <br/>
            Quality builds here
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrFormPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrFormNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListDryFruits[0]
            ? homeProductCartListDryFruits.map((el) => {
                return (
                  <CardFeatures
                    key={el._id + "sem-1"}
                    product={el}
                  />
                );
              })
            : loadingArrayFeatures.map((el, index) => (
                <CardFeatures
                  loading="Loading...."
                  key={index + "cartLoading"}
                />
              ))}
        </div>
      </div>

      <AllProducts heading={"Quality builds here"} />
      <Contact />
    </div>
  );
};

export default Home;
