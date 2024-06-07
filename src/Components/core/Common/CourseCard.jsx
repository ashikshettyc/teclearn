import React, { useState } from "react";

// Importing React Icons

import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { setCart } from "../../../slices/CartSlice";

const CourseCard = ({cardData}) => {
  const [activeBtn, setActiveBtn] = useState(false)
  const {user} = useSelector(state => state.profile)
  const {add, remove} = useSelector(state => state.carts)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {token} = useSelector(state=> state.auth)
  
  function handleclick () {
    token && user.accountType === "Student"  ? navigate("/cart") : navigate("/signup")
 
  }

  function handleCart () {
    setActiveBtn(prev => !prev)
    if(!activeBtn) {
      add(cardData)
      console.log(cardData)
     }
     if(activeBtn) {
      remove(cardData)
      console.log(cardData)
     }
  }
  return (
    <div
      className={`w-[360px] lg:w-66 bg-slate-50  text-richblack-25 h-[480px] box-border cursor-pointer `}>
      <div className="h-60 w-auto object-cover overflow-hidden" >
        <img src={cardData?.thumbnail} alt="thumbnail"/>
      </div>
      <div className="flex flex-col gap-3 pb-10 p-4 h-40">
        <div
          className={` font-semibold text-2xl text-zinc-900`}
        >
          {cardData?.courseName}
        </div>

        <div className="text-slate-600">{cardData?.description}</div>
      </div>
      <div
        className={`flex items-center justify-between gap-4 px-6 py-3 font-medium`}
      >
        {/* Level */}
        <button className="flex bg-amber-400 py-2 px-5 rounded-md items-center gap-2 text-[16px]">
       
          <p onClick={handleclick}>Buy Now</p>
        </button>

        {/* Flow Chart */}
        <button className="flex bg-slate-800 text-white py-2 px-5 rounded-md items-center gap-2 text-[16px]" onClick={handleCart}>
          {
            activeBtn ? <p>Added</p> : <p>Add to Cart</p>
          }
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
