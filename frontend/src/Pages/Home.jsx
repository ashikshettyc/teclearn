// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import HighlightText from '../Components/core/Common/HighlightText'
// import CTAButton from "../Components/core/Common/CTAButton"
// function Home() {
//   return (
  
      
//       <div className='relative'> 
//       {/* Section 1 */}
//       <div className='absolute bg-gradient-to-b from-indigo-400/50 to-purple-600/80 w-96 h-96 blur-[200px] z-0 right-52'></div>
//       <div className='absolute bg-gradient-to-b from-cyan-400/50 to-blue-600/80 w-96 h-96 blur-[200px] z-0 bottom-2'></div>

//       <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        
//         {/* Become a Instructor Button */}
//         <Link to={"/signup"}>
//           <div className="group mx-auto mt-16 w-fit rounded-full bg-slate-800 p-1 font-bold text-slate-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
//             <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-slate-900">
//               <p>Become an Instructor</p>
//               <FaArrowRight />
//             </div>
//           </div>
//         </Link>

//         {/* Heading */}
//         <div className="text-center text-4xl font-semibold">
//           Empower Your Future with
//           <HighlightText text={"Coding Skills"} />
//         </div>

//         {/* Sub Heading */}
//         <div className="-mt-3 w-[70%] text-center text-lg font-bold text-richblack-300">
//           With our online coding courses, you can learn at your own pace, from
//           anywhere in the world, and get access to a wealth of resources,
//           including hands-on projects, quizzes, and personalized feedback from
//           instructors.
//         </div>

//         {/* CTA Buttons */}
//         <div className=" mt-8 flex flex-row gap-7">
//           <CTAButton active={true} linkto={"/signup"}>
//             Learn More
//           </CTAButton>
//           <CTAButton active={false} linkto={"/login"}>
//             Book a Demo
//           </CTAButton>
//         </div>
//         <div className="mx-auto mb-20 flex flex-col w-11/12 max-w-maxContent items-center justify-center gap-4 ">

//         <div className="md:mb-10 flex flex-col justify-center lg:mt-20 lg:flex-row gap-8">
//             <div className="text-4xl font-semibold lg:w-[35%] ">
//               Get the skills you need for a{" "}
//               <HighlightText text={"job that is in demand."} />
//             </div>
//             <div className="flex flex-col items-start text-center gap-10 md:w-[30%] font-semibold pb-10">
//               <div className="text-lg">
//                 The modern TecLearn is the dictates its own terms. Today, to
//                 be a competitive specialist requires more than professional
//                 skills.
//               </div>
//               </div>
             
//             </div>
//             <CTAButton active={true} linkto={"/signup"}>
//                 <div className="">Learn More</div>
//               </CTAButton>
//           </div>
        
//     </div>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HighlightText from '../Components/core/Common/HighlightText';
import CTAButton from "../Components/core/Common/CTAButton";

function Home() {
  return (
    <div className='relative'>
      {/* Gradient Backgrounds */}
      <div className='absolute bg-gradient-to-b from-indigo-400/50 to-purple-600/80 w-96 h-96 blur-[200px] z-0 right-52'></div>
      <div className='absolute bg-gradient-to-b from-cyan-400/50 to-blue-600/80 w-96 h-96 blur-[200px] z-0 bottom-2'></div>

      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        
        {/* Become an Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-blue-600 p-1 font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-colors duration-200 group-hover:bg-blue-700">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Main Heading */}
        <div className="text-center text-5xl font-bold">
          Unlock Your Potential with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[80%] text-center text-lg font-medium text-gray-300">
          Learn at your own pace, from anywhere in the world. Access a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Get Started
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Additional Section */}
        <div className="mx-auto mb-20 flex flex-col w-11/12 max-w-maxContent items-center justify-center gap-4">
          <div className="md:mb-10 flex flex-col justify-center lg:mt-20 lg:flex-row gap-8">
            <div className="text-4xl font-semibold lg:w-[35%]">
              Gain Skills for a
              <HighlightText text={"High-Demand Career"} />
            </div>
            <div className="flex flex-col items-start text-center gap-10 md:w-[45%] font-medium pb-10">
              <div className="text-lg">
                In today's tech-driven world, staying ahead requires more than just knowledge. Equip yourself with the skills to excel and lead in your chosen field.
              </div>
            </div>
          </div>
          <CTAButton active={true} linkto={"/signup"}>
            <div className="">Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
