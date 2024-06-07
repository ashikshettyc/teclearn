import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { signUp } from '../services/operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function VerifyEmail() {
  const [otp, setOtp] = useState('');
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate('/signup');
    }
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        contactNumber,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div>
      <h1>Verify Email</h1>
      <p>A verification code has been sent to you. Enter the code below</p>
      <form onSubmit={handleVerifyAndSignup}>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
              }}
              className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
          
            />
          )}
        />
        <button
          type="submit"
          className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
        >
          Verify Email
        </button>
      </form>
    </div>
  );
}

export default VerifyEmail;
