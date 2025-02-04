import { createSlice } from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    mapMovedTrigger: true
  },
  reducers: {
    trigger:(state)=>{
        state.mapMovedTrigger = !state.mapMovedTrigger;
    }
  }
});

export const { trigger } = mapSlice.actions;
export default mapSlice.reducer;
