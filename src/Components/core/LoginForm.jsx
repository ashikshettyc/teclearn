import React, { useState } from 'react';
import {login} from '../../services/operations/authAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })
  const {email, password} = formData;
  const [showPassword, setShowPassword] = useState(false)

  const handleOnChange = (e) => {
setFormData(prev => ({
  ...prev, [e.target.name]: e.target.value
}))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate))
  }
  return (
    <form
    onSubmit={handleOnSubmit}
    className="mt-6 flex w-full flex-col gap-y-4"
  >
    <label className="w-full">
      <p className="text-white mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        Email Address <sup className=" text-red-600">*</sup>
      </p>
      <input
        required
        type="text"
        name="email"
        value={email}
        onChange={handleOnChange}
        placeholder="Enter email address"
        className="form-style w-full"
      />
    </label>
    <label className="relative">
      <p className="text-white mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        Password <sup className="text-red-600">*</sup>
      </p>
      <input
        required
        type={showPassword ? "text" : "password"}
        name="password"
        value={password}
        onChange={handleOnChange}
        placeholder="Enter Password"
        className="form-style w-full !pr-10"
      />
      <span
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
      >
        {showPassword ? (
          <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
        ) : (
          <AiOutlineEye fontSize={24} fill="#AFB2BF" />
        )}
      </span>
     
    </label>
    <button
      type="submit"
      className="mt-6 rounded-[8px] bg-yellow-500 py-[8px] px-[12px] font-medium text-slate-900"
    >
      Log In
    </button>
  </form>
  );
}

export default LoginForm;
