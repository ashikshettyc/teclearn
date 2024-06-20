import { apiConnector } from '../apiConnector';
import { toast } from 'react-hot-toast';
import { studentEndPoints } from '../apis';
import { reset } from '../../slices/CartSlice';
const { BUY_COURSES, ENROLLED_COURSE } = studentEndPoints;

export const buyCourse = async (data, token, navigate, dispatch) => {
  try {
    const response = await apiConnector('POST', BUY_COURSES, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log('students enrolled course', response);

    if (!response?.data?.success) {
      throw new Error('Could Not buy course');
    }
    toast.success('Courses added');
    dispatch(reset());
    navigate('/dashboard/enrolled-courses');
  } catch (error) {
    console.log('buying course api error ', error);
    console.log(error.message, data);
  }
};

export const enrolledCourse = async (token) => {
  try {
    const response = await apiConnector('GET', ENROLLED_COURSE, null, {
      Authorization: `Bearer ${token}`,
    });
    const result = response?.data.studentsCourse.courses;
    console.log('what is enrolled', response?.data.studentsCourse.courses);
    return result;
  } catch (error) {
    console.log('cannot fetch enrolled course', error);
  }
};
