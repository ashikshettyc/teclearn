import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  studentEnroll: '',
};

const studentSlice = createSlice({
  name: 'Enrolled',
  initialState: initialState,
  reducers: {
    setStudentEnroll(state, value) {
      state.studentEnroll = value.payload;
    },
  },
});

export const { setStudentEnroll } = studentSlice.actions;
export default studentSlice.reducer;
