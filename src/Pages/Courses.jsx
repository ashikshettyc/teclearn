import React, { useState } from 'react'
import CourseCard from '../Components/core/Common/CourseCard';

function Courses() {
    const [category, setCategory] = useState([])

    const catalogs = ["JavaScript", "Python", "Java"];
  return (
    <div>
        <div>
            <h1>JavaScript</h1>
            {
                <CourseCard category={category}/>   
            }
        </div>
        <div>
            <h1>Python</h1>
        </div>
        <div>
            <h1>Java</h1>
        </div>
    </div>
  )
}

export default Courses