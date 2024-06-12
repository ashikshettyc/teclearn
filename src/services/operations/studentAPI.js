import { apiConnector } from '../apiConnector';
import { toast } from 'react-hot-toast';
import { studentEndPoints } from '../apis';

const { BUY_COURSES } = studentEndPoints;

export const buyCourse = async (data, token) => {
  try {
    const response = await apiConnector('POST', BUY_COURSES, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log('students enrolled course', response);

    if (!response?.data?.success) {
      throw new Error('Could Not buy course');
    }
  } catch (error) {
    console.log('buying course api error ', error);
    console.log(error.message, data);
  }
};
