import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Template({formtype}) {
  return (
    <div className='flex items-center text-start mt-20'>
        <div className='flex flex-col'>
        {
  formtype === "login" ? (
    <div>
      <h2 className='text-white text-2xl font-bold py-2'>
        Welcome Back to LearnTec!
      </h2>
      <p className='text-md font-bold bg-gradient-to-r from-sky-600 via-blue-500 to-slate-400 bg-clip-text text-transparent'>
        Your gateway to continuous learning. <br /> Log in to access your courses.
      </p>
    </div>
  ) : (
    <div>
      <h2 className='text-white text-2xl font-bold py-2'>
        Join LearnTec Today!
      </h2>
      <p className='text-md font-bold bg-gradient-to-r from-sky-600 via-blue-500 to-slate-400 bg-clip-text text-transparent'>
        Become a part of our learning community. <br /> Sign up to start exploring a world of knowledge and opportunity.
      </p>
    </div>
  )
}

{formtype === "login" ? (<LoginForm/>) : (<SignUpForm/>)}
        </div>
        
     
    </div>
  )
}

export default Template