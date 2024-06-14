import React from 'react'
import Template from '../Components/core/Template'



function LogIn() {

  return (
    <div className='mx-auto flex justify-center'>
      <div className=' absolute bg-gradient-to-b from-green-500 to-cyan-400 w-28 h-52 blur-[150px] top-80 left-72 z-0'></div>
      <div className='relative z-10'>
      <Template formtype={"login"}/>
      </div>
        
    </div>
  )
}


export default LogIn