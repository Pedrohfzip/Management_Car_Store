import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  userData: {
    name: '',
    email: '',
    password: ''
  },
  userLogged: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setUserDataLogged(state, action) {
      state.userLogged = action.payload;
    },
  },
});

export const { setUserData, setUserDataLogged } = userSlice.actions;
export default userSlice.reducer;
