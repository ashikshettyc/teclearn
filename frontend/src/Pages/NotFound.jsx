import React from 'react'
import { motion } from 'framer-motion'
import puppyGifUrl from "../assets/Designer.png"
function NotFound() {

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }} 
        className="text-center z-10"
      >
        {/* <h1 className="text-6xl font-bold mb-4">404</h1> */}
        <p className="text-2xl mb-4">Page Not Found</p>
        <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        <a 
          href="/" 
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Go Home
        </a>
      </motion.div>
      <img 
        src={puppyGifUrl} 
        alt="Puppy wagging its tail" 
        className="absolute w-3/6 h-auto opacity-85"
      />
    </div>
  )
}

export default NotFound
