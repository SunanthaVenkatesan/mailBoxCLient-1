import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: null,
  isAuthenticated:!!localStorage.getItem('token')
};



const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    onTokenreceive(state, action) {
      state.token = action.payload;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});



const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    
  },
});

export const authActions = authSlice.actions;


export default store;
