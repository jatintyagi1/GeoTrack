import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isActive: false
  },
  reducers: {
    open: (state) => {
      state.isActive = true;
    },
    close: (state) => {
      state.isActive = false;
    }
  }
});

export const { open, close } = sideBarSlice.actions;
export default sideBarSlice.reducer;
