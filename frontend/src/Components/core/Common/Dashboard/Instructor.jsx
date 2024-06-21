import React, { useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import { fetchInstructorCourses } from '../../../../services/operations/CourseDetailsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../../../services/operations/CourseDetailsAPI';

function AddInstructorCourse() {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const datas = async () => {
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
  };

  useEffect(() => {
    datas();
  }, [token]);

  const handleRemove = async (courseId) => {
    try {
      console.log(courseId);
      dispatch(deleteCourse(courseId, token));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-screen justify-center">
      <Table className="w-[90%] border my-6 rounded-xl border-slate-800 bg-slate-900">
        <Thead>
          <Tr className="border-b border-slate-600">
            <Th className="text-sm font-medium uppercase text-slate-300 py-4 px-6 text-left">
              Courses
            </Th>
            <Th className="text-sm font-medium uppercase text-slate-300 py-4 px-6 text-left">
              Duration
            </Th>
            <Th className="text-sm font-medium uppercase text-slate-300 py-4 px-6 text-left">
              Price
            </Th>
            <Th className="text-sm font-medium uppercase text-slate-300 py-4 px-6 text-left">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses?.length === 0 ? (
            <Tr>
              <Td
                className="py-10 text-center text-2xl font-medium text-slate-300"
                colSpan="4"
              >
                No courses found
              </Td>
            </Tr>
          ) : (
            courses?.map((course) => (
              <Tr
                key={course._id}
                className="border-b border-slate-600 hover:bg-slate-800 transition-all"
              >
                <Td className="py-6 px-6 flex gap-x-4 items-center">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="h-24 w-32 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold text-slate-200">
                      {course.courseName}
                    </p>
                    <p className="text-xs text-slate-300 mt-2">
                      {course.description}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Created: {course.createdAt}
                    </p>
                  </div>
                </Td>
                <Td className="text-sm font-medium text-slate-300 py-6 px-6">
                  2hr 5min
                </Td>
                <Td className="text-sm font-medium text-slate-300 py-6 px-6">
                  ${course.price}
                </Td>
                <Td
                  className="text-sm font-medium text-red-500 py-6 px-6 cursor-pointer"
                  onClick={() => handleRemove(course._id)}
                >
                  Remove
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </div>
  );
}

export default AddInstructorCourse;
