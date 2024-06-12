import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../../../slices/CartSlice";

const CourseCard = ({ cardData }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const { user } = useSelector((state) => state.profile);
  const carts = useSelector((state) => state.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // // Initialize button state from localStorage on mount
  // useEffect(() => {
  //   const storedState = localStorage.getItem(`cartState-${cardData._id}`);
  //   if (storedState !== null && storedState !== "undefined") {
  //     setActiveBtn(JSON.parse(storedState));
  //   } else {
  //     setActiveBtn(cardData.active || false);
  //   }
  // }, [cardData._id, cardData.active]);

  // // Update localStorage whenever activeBtn changes
  // useEffect(() => {
  //   localStorage.setItem(`cartState-${cardData._id}`, JSON.stringify(activeBtn));
  // }, [activeBtn, cardData._id]);

  // Check if the item is in the cart
  const isItemInCart = carts.some((item) => item._id === cardData._id);

  function handleClick() {
    if (token && user.accountType === "Student") {
      navigate("/cart");
    } else {
      navigate("/signup");
    }
  }

  function handleCart() {
    const newState = !activeBtn;
    setActiveBtn(newState);
    const updatedCardData = { ...cardData, active: newState };

    if (newState) {
      dispatch(add(updatedCardData));
    } else {
      dispatch(remove(cardData._id));
    }
  }

  return (
    <div className={`w-[360px] lg:w-66 bg-slate-50 text-richblack-25 h-[480px] box-border cursor-pointer`}>
      <div className="h-60 w-auto object-cover overflow-hidden">
        <img src={cardData?.thumbnail} alt="thumbnail" />
      </div>
      <div className="flex flex-col gap-3 pb-4 p-4 h-40">
        <div className={`font-semibold text-2xl text-zinc-900`}>
          {cardData?.courseName}
        </div>
        <div className="text-slate-600">{cardData?.description}</div>
      </div>
      <p className="text-green-600 font-bold text-lg px-2">${cardData.price}</p>
      <div className={`flex items-center justify-between gap-4 px-6 py-1 font-medium`}>
        {/* Buy Now */}
        <button className="flex bg-amber-400 py-2 px-5 rounded-md items-center gap-2 text-[16px]">
          <p onClick={handleClick}>Buy Now</p>
        </button>
        {/* Add to Cart */}
        <button className="flex bg-slate-800 text-white py-2 px-5 rounded-md items-center gap-2 text-[16px]" onClick={handleCart}>
          <p>{isItemInCart ? "Added" : "Add to Cart"}</p>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
