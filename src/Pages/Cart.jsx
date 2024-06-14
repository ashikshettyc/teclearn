import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import CartItem from '../Components/core/Common/Cart/CartItem'
import { buyCourse } from '../services/operations/studentAPI'
import { reset } from "../slices/CartSlice";

function Cart() {
    const carts = useSelector(state=>state.carts)
    const {token} = useSelector(state=> state.auth)
    const [amount, setAmount] = useState(0)
   const navigate = useNavigate()
   const dispatch = useDispatch()
    useEffect(()=> {
      const totalAmount = (carts.reduce((acc, curr) => acc + curr.price, 0))
      setAmount(totalAmount)
    }, [carts])


    const buyCourseHandler = async() => {
      await buyCourse(carts,token)
    
      navigate("/dashboard/enrolled-courses")
    }
  return (
    <div className=" mb-10">
      {carts.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center max-[1300px] mx-auto gap-x-5">
          {/* Cart Item  */}
          <div className="md:w-[60%] flex flex-col p-2 pb-10">
            {carts.map((cartItem, index) => (
              <CartItem item={cartItem} key={cartItem.id} itemIndex={cartItem._id} />
            ))}
          </div>

          {/* Summary */}
          <div className="text-center md:text-start md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col h-[100%] justify-between p-5 gap-5 my-14">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-800 ">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">
                  Summary
                </div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items: {carts.length}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col mx-auto w-full pb-10">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
                ${amount}
              </p>
              <button className=" bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl md:mr-10"
              onClick={buyCourseHandler}
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <NavLink to="/courses">
            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
              shop now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Cart