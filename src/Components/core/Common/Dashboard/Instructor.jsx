import React, { useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import { fetchInstructorCourses } from '../../../../services/operations/CourseDetailsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../../../services/operations/CourseDetailsAPI';
function AddInstructorCourse() {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth);
  // const { user } = useSelector((state) => state.profile);
  const datas = async () => {
    const result = await fetchInstructorCourses(token);
 
    if (result) {
      setCourses(result);

    }
  };
  useEffect(() => {
   
    datas();
  },[token]);

 const handleRemove = async (courseId) =>  {
    
    try {
      console.log(courseId)
    dispatch(deleteCourse(courseId,token))
    
     
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <>
  
      <Table className="border rounded-xl border-slate-800 ">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b border-b-slate-800 py-2">
            <Th className=" text-sm font-medium uppercase text-slate-300 w-[50%]">
              Courses
            </Th>
            <Th className=" text-sm font-medium uppercase text-slate-300 w-[20%]">
              Duration
            </Th>
            <Th className=" text-sm font-medium uppercase text-slate-300 w-[10%]">
              Price
            </Th>
            <Th className=" text-sm font-medium uppercase text-slate-300 w-[10%]">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-slate-300">
                No courses found
              </Td>
            </Tr>
          ) : (
            courses?.map((course) => (
              <Tr
                key={course._id}
                className="flex gap-x-10 border-b border-slate-800 px-6 items-center justify-center py-8"
              >
                <Td className="flex flex-1 gap-x-4 w-[50%]">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="h-36 w-48 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-slate-200">
                      {course.courseName}
                    </p>
                    <p className="text-xs text-slate-300">
                      {course.description}
                    </p>
                    <p>Created: {course.createdAt}</p>
                  </div>
                </Td>
                <Td className="text-sm font-medium text-slate-300 w-[20%]">2hr 5min</Td>
                <Td className="text-sm font-medium text-slate-300 w-[10%]">
                  ${course.price}
                </Td>
                <Td className="text-sm font-medium text-slate-300 w-[10%]">
                 <p onClick={()=>handleRemove(course._id)}>Remove</p>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </>
  );
}

export default AddInstructorCourse;
