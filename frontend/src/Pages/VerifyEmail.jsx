// import React, { useEffect, useState } from 'react';
// import OTPInput from 'react-otp-input';
// import { signUp } from '../services/operations/authAPI';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// function VerifyEmail() {
//   const [otp, setOtp] = useState('');
//   const { signupData, loading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!signupData) {
//       navigate('/signup');
//     }
//   }, []);

//   const handleVerifyAndSignup = (e) => {
//     e.preventDefault();
//     const {
//       accountType,
//       firstName,
//       lastName,
//       email,
//       password,
//       contactNumber,
//       confirmPassword,
//     } = signupData;

//     dispatch(
//       signUp(
//         accountType,
//         firstName,
//         lastName,
//         email,
//         contactNumber,
//         password,
//         confirmPassword,
//         otp,
//         navigate
//       )
//     );
//   };
//   return (
//     <div>
//       <h1>Verify Email</h1>
//       <p>A verification code has been sent to you. Enter the code below</p>
//       <form onSubmit={handleVerifyAndSignup}>
//         <OTPInput
//           value={otp}
//           onChange={setOtp}
//           numInputs={6}
//           renderSeparator={<span>-</span>}
//           renderInput={(props) => (
//             <input
//               {...props}
//               style={{
//                 boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
//               }}
//               className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
          
//             />
//           )}
//         />
//         <button
//           type="submit"
//           className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
//         >
//           Verify Email
//         </button>
//       </form>
//     </div>
//   );
// }

// export default VerifyEmail;


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
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-white mb-4">Verify Email</h1>
        <p className="text-center text-gray-400 mb-6">
          A verification code has been sent to your email. Enter the code below.
        </p>
        <form onSubmit={handleVerifyAndSignup} className="flex flex-col gap-y-4">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="mx-1 text-gray-400">-</span>}
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
            className="w-full bg-yellow-500 py-3 px-4 rounded-lg font-medium text-black hover:bg-yellow-600 transition duration-300"
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
