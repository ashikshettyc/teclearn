import { apiConnector } from '../apiConnector';
import { toast } from 'react-hot-toast';
import { courseEndpoints } from '../apis';
const {
  Get_ALL_INSTRUCTOR_COURSES_API,
  CREATE_NEW_COURSE_API,
  GET_ALL_COURSE_API,
  DELETE_COURSE_API,
} = courseEndpoints;
export const fetchInstructorCourses = async (token) => {
  let result = [];
  let response;
  try {
    response = await apiConnector('GET', Get_ALL_INSTRUCTOR_COURSES_API, null, {
      Authorization: `Bearer ${token}`,
    });
    console.log('INSTRUCTOR COURSES API RESPONSE............', response);
    if (!response?.data?.success) {
      throw new Error('Could Not Fetch Instructor Courses');
    }
    result = response?.data?.data;
  } catch (error) {
    console.log('INSTRUCTOR COURSES API ERROR............', error);
    toast.error(error.message);
    console.log(response?.data);
  }

  return result;
};

export const addCourse = async (data, token) => {
  try {
    const response = await apiConnector('POST', CREATE_NEW_COURSE_API, data, {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    });

    console.log('DATA has been added', response);
    if (!response?.data?.success) {
      throw new Error('Could Not Add Course Details');
    }
  } catch (error) {
    console.log('something happended', error);
    console.log(error.message);
  }
};
// export const addCourse = async (data, token) => {
//   let response;
//   try {
//     response = await apiConnector('POST', CREATE_NEW_COURSE_API, data, {
//       Authorization: `Bearer ${token}`,
//     });
//     console.log('course created.....', response);
//     console.log(response.data.success);
//     if (!response.data) {
//       throw new Error('error problem', response);
//     }
//   } catch (error) {
//     console.log('course creation error............', error);
//     console.log(data);
//     toast.error('Course creation failed');
//   }
// };

export const getAllCourses = async (token) => {
  let result = [];
  try {
    let response = await apiConnector('GET', GET_ALL_COURSE_API, {
      Authorization: `Bearer ${token}`,
    });
    console.log('all courses fetched ............', response);
    if (!response?.data?.success) {
      throw new Error('Could Not Fetch all Courses');
    }
    return (result = response?.data?.data);
  } catch (error) {
    console.log('allcourse api error............', error);
    toast.error(error.message);
  }
};

export const deleteCourse = async (data, token) => {
  try {
    console.log(data);
    let response = await apiConnector(
      'DELETE',
      DELETE_COURSE_API,
      { data },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log('course deleted', response);

    if (!response?.data?.success) {
      throw new Error('Could Not Fetch the file to delete');
    }
  } catch (error) {
    console.log('delete course api error............', error);
    toast.error(error.message);
  }
};
