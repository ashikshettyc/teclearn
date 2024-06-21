import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  allCourses: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState: initalState,
  reducers: {
    setAllCourses(state, value) {
      state.allCourses = value.payload;
    },
  },
});

export const { setAllCourses } = categorySlice.actions;
export default categorySlice.reducer;
