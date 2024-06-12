import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'carts',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    // reset: (state) => {
    //   state.carts = [];
    // },
  },
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;
