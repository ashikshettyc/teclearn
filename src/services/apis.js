const BASE_URL = 'http://localhost:4000/api/v1';

//auth endpoint
export const endpoints = {
  SENDOTP_API: BASE_URL + '/auth/sendotp',
  SIGNUP_API: BASE_URL + '/auth/signup',
  LOGIN_API: BASE_URL + '/auth/login',
  GETUSER_ACCOUNTTYPEAPI: BASE_URL + '/Dashboard/userdetails',
};

export const courseEndpoints = {
  Get_ALL_INSTRUCTOR_COURSES_API: BASE_URL + '/course/getInstructorCourses',
  CREATE_NEW_COURSE_API: BASE_URL + '/course/createCourse',
  GET_STUDENTS_COURSE_API: BASE_URL + '/course/studentsCourses',
  GET_ALL_COURSE_API: BASE_URL + '/course/getAllCourses',
};
