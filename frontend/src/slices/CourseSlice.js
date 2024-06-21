import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  courses: null,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState: initalState,
  reducers: {
    setCourses(state, value) {
      state.courses = value.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;
export default courseSlice.reducer;
