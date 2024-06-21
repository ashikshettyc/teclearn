import React, { useEffect, useState } from 'react'
import { enrolledCourse } from '../../../../services/operations/studentAPI'
import { useSelector } from 'react-redux'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'; 
function StudentEnrolled() {
const {token } = useSelector(state=>state.auth)
const [courses, setCourses] = useState([])

useEffect(() => {
  const data = async () => {
    try {
      const result = await enrolledCourse(token);
   
        console.log(result);
     setCourses(result)
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  data();
}, [token]);

  return (
    

<div className="w-full bg-slate-900 text-white overflow-x-auto">
<Table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
  <Thead className="bg-gray-800 text-white">
    <Tr>
      <Th className="py-3 px-4">Image</Th>
      <Th className="py-3 px-4">Course Name</Th>
      <Th className="py-3 px-4">Description</Th>
      <Th className="py-3 px-4">Category</Th>
    </Tr>
  </Thead>
  <Tbody className="divide-y divide-gray-200">
    {courses.map(item => (
      <Tr key={item._id} className="bg-gray-700">
        <Td className="py-3 px-4">
          <img src={item.thumbnail} alt={item.courseName} className="h-20 w-32 object-cover" />
        </Td>
        <Td className="py-3 px-4">{item.courseName}</Td>
        <Td className="py-3 px-4">{item.description}</Td>
        <Td className="py-3 px-4">{item.category}</Td>
      </Tr>
    ))}
  </Tbody>
</Table>
</div>

  )
}

export default StudentEnrolled