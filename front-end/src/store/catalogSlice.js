import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vehicles: [],
  filter: {}
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setVehicles(state, action) {
      state.vehicles = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setVehicles, setFilter } = catalogSlice.actions;
export default catalogSlice.reducer;
