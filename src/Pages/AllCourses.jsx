import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CourseCard from "../Components/core/Common/CourseCard"
import { getAllCourses } from '../services/operations/CourseDetailsAPI'
import Category, { setAllCourses } from '../slices/Category'
const tabs = [
   "All",
   "Python",
   "JavaScript",
   "Java"
]


function AllCourses() {
    const [course, setCourse]= useState([]) //getting data from api
    const [elemtab, setElemTab] = useState(tabs[0]) //setting category
   
    const { token } = useSelector((state) => state.auth);

    

useEffect(() => {
    const data =async () => {
        const result = await getAllCourses(token);
        if(result){
            setCourse(result)

        }
    }
    data()
},[])
  

    const setMyCard = (value) => {
        setElemTab(value)
      
    }


    function getCategory() {
if (elemtab === "All") {
    return course;
   
} else {
    let filtered  = course.filter(ele => ele.category === elemtab)
    return filtered;
    
}
    }
  return (
    <div className='bg-slate-900 flex flex-col pb-12'>
  <div className="flex gap-5 m-10 mx-auto w-max bg-slate-800 text-slate-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
    {
    tabs.map((elem, index) => {
      return  <div className={` text-[16px] flex flex-row items-center gap-2 ${
        elemtab === elem
          ? "bg-slate-900 text-slate-5 font-medium"
          : "text-slate-200"
      } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-slate-900 hover:text-slate-5`}
      key={index}
      onClick={() => setMyCard(elem)}>{elem}</div>
    })
}


        </div>
        <div>
        <div className="flex gap-8 justify-center flex-wrap w-11/12  text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {getCategory().map((ele) => {
          return (
            <CourseCard
              key={ele.id}
              cardData={ele}
             
            />
          );
          
        })}
   
      </div>
        </div>
    </div>
  
  )
}

export default AllCourses