import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../slices/authSlice';
import profileReducer from '../slices/UserSlice';
import courseReducer from '../slices/CourseSlice';
import categoryReducer from '../slices/Category';
import cartReducer from '../slices/CartSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  courses: courseReducer,
  category: categoryReducer,
  carts: cartReducer,
});
export default rootReducer;
