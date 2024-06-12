import React from 'react'
import Template from '../Components/core/Template'



function LogIn() {

  return (
    <div className='flex justify-center'>
      <div className=' relative b bg-gradient-to-b from-green-500 to-cyan-400 w-28 h-52 blur-[150px] top-80 left-56'></div>
        <Template formtype={"login"}/>
    </div>
  )
}

export default LogIn