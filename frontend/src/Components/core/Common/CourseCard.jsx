// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { add, remove } from "../../../slices/CartSlice";

// const CourseCard = ({ cardData }) => {
//   const [activeBtn, setActiveBtn] = useState(false);
//   const { user } = useSelector((state) => state.profile);
//   const carts = useSelector((state) => state.carts);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);



//   // Check if the item is in the cart
//   const isItemInCart = carts.some((item) => item._id === cardData._id);

//   function handleClick() {
//     if (token && user.accountType === "Student") {
//       navigate("/cart");
//     } else {  
//       navigate("/signup");
//     }
//   }

//   function handleCart() {
//     const newState = !activeBtn;
//     setActiveBtn(newState);
//     const updatedCardData = { ...cardData, active: newState };

//     if (newState) {
//       dispatch(add(updatedCardData));
//     } else {
//       dispatch(remove(cardData._id));
//     }
//   }

//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   return (
//     <div className={`w-[360px] lg:w-66 bg-slate-50 text-richblack-25 h-[480px] box-border cursor-pointer`}>
//       <div className="h-60 w-auto object-cover overflow-hidden">
//         <img src={cardData?.thumbnail} loading="lazy" alt="thumbnail" />
//       </div>
//       <div className="flex flex-col gap-3 pb-4 p-4 h-32">
//         <div className={`font-semibold text-2xl text-zinc-900`}>
//           {cardData?.courseName}
//         </div>
//         <div className="text-slate-600">{cardData?.description}</div>
//       </div>
//       <p className="text-slate-600 px-4 underline">Instructor: {capitalizeFirstLetter(cardData.instructor.firstName)}</p>
//       <p className="text-green-600 font-bold text-lg px-2">${cardData.price}</p>
//       <div className={`flex items-center justify-between gap-4 px-6 py-1 font-medium`}>
//         {/* Buy Now */}
//         <button className="flex bg-amber-400 py-2 px-5 rounded-md items-center gap-2 text-[16px]">
//           <p onClick={handleClick}>Buy Now</p>
//         </button>
//         {/* Add to Cart */}
//         <button className="flex bg-slate-800 text-white py-2 px-5 rounded-md items-center gap-2 text-[16px]" onClick={handleCart}>
//           <p>{isItemInCart ? "Added" : "Add to Cart"}</p>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../../../slices/CartSlice";
import toast from "react-hot-toast";

const CourseCard = ({ cardData }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const { user } = useSelector((state) => state.profile);
  const carts = useSelector((state) => state.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // Check if the item is in the cart
  const isItemInCart = carts.some((item) => item._id === cardData._id);

  function handleClick() {
    if (token && user.accountType === "Student") {
      const updatedCardData = { ...cardData};
      dispatch(add(updatedCardData))
      navigate("/cart");
    } else {
      navigate("/signup");
    }
  }

  function handleCart() {
    if(!token){
      navigate("/signup")
      toast.error("Please signup/login")
    }
    const newState = !activeBtn;
    setActiveBtn(newState);
    const updatedCardData = { ...cardData, active: newState };

    if (newState) {
      dispatch(add(updatedCardData));
    } else {
      dispatch(remove(cardData._id));
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const alreadyPresent = user.courses.some(courseId => courseId === cardData._id);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={cardData?.thumbnail}
          loading="lazy"
          alt="Course Thumbnail"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold text-xl text-gray-900 mb-2">
          {cardData?.courseName}
        </div>
        <div className="text-gray-700 text-sm mb-4">
          {cardData?.description}
        </div>
        <p className="text-gray-600 mb-2">Instructor: {capitalizeFirstLetter(cardData.instructor.firstName)}</p>
        <div className="flex items-center mb-4 border-b-2 border-dashed" >
          <p className="text-green-600 font-bold text-lg mr-2">${cardData.price}</p>
          
        </div>
       {
        alreadyPresent ? ( <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-400 text-gray-800 py-2 px-4 mx-auto flex justify-center rounded-md transition duration-300"
        >
          Already present
        </button>) : 
         <div className="flex items-center justify-between">
          
         {/* Buy Now */}
         <button
           onClick={handleClick}
           className="bg-amber-500 hover:bg-amber-400 text-gray-800 py-2 px-4 rounded-md transition duration-300"
         >
           Buy Now
         </button>
         {/* Add to Cart */}
         <button
           onClick={handleCart}
           className={`bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md transition duration-300 ${
             isItemInCart && "bg-gray-700 hover:bg-gray-600"
           }`}
         >
           {isItemInCart ? "Added" : "Add to Cart"}
         </button>
       </div>
       }
      </div>
    </div>
  );
};

export default CourseCard;
