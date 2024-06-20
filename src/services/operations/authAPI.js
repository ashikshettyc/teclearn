import { toast } from 'react-hot-toast';

import { setLoading, setToken } from '../../slices/authSlice';
import { apiConnector } from '../apiConnector';
import { endpoints } from '../apis';
import { setUser } from '../../slices/UserSlice';

const { SENDOTP_API, SIGNUP_API, LOGIN_API } = endpoints;

export function sendotp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading('loading...');
    dispatch(setLoading(true));
    try {
      const response = await apiConnector('POST', SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log('SENDOTP API RESPONSE......', response);
      console.log(response.data.success);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success('OTP Sent Successfully');
      navigate('/verify-email');
    } catch (error) {
      console.log('SENDOTP API ERRORS............', error);
      toast.error('Could Not Send OTP');
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  contactNumber,
  password,
  confirmPassword,
  otp,

  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading('Loading...');
    dispatch(setLoading(true));
    try {
      const response = await apiConnector('POST', SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        contactNumber,
        password,
        confirmPassword,
        otp,
      });
      console.log('SIGNUP API RESPONSE............', response);
      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success('Signup Successful');
      navigate('/login');
    } catch (error) {
      console.log('SIGNUP API ERROR............', error);
      toast.error('Signup Failed');
      navigate('/signup');
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading('loading...');
    dispatch(setLoading(true));
    try {
      const response = await apiConnector('POST', LOGIN_API, {
        email,
        password,
      });
      console.log('LOGIN API RESPONSE............', response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success('Login Successful');
      dispatch(setToken(response.data.token));
      dispatch(setUser({ ...response.data.user }));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (error) {
      console.log('LOGIN API ERROR............', error);
      toast.error('Login Failed');
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

// export function settingUser() {
//   return async (dispatch) => {
//     try {
//       const result = await apiConnector('GET', GETUSER_ACCOUNTTYPEAPI);
//       dispatch(setUser(...result.data.data));
//     } catch (error) {
//       console.log('GET_USER_DETAILS API ERROR............', error);
//       toast.error('Could Not Get User Details');
//     }
//   };
// }

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    // dispatch(resetCart());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged Out');
    navigate('/');
  };
}
