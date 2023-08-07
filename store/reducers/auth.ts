// types
import { createSlice } from '@reduxjs/toolkit';
import {IAuthStore} from "@/models/auth";

// initial state
const initialState:IAuthStore = {
  email : '',
};


// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      Object.assign(state, {
        user: action.payload,
        logged : true
      })

      console.log(action.payload)

      localStorage.setItem('token', action.payload.token)
    },

    updateEmail(state, action) {
      state.email = action.payload
    },

    updateUser(state, action) {
      Object.assign(state, {
        user: action.payload,
        logged : true
      })

      console.log(action.payload)

    },

    updateLogged(state, action) {
      state.logged = false
    },

    updateNickName(state, action){
      if(state.user){
        state.user.nickName = action.payload
      }
    },

    logout(state) {
      localStorage.removeItem('token')
      state.user = undefined;
      state.logged = false;
    }
  }
});

export default auth.reducer;

export const {
  login,
  updateEmail,
  updateUser,
  updateNickName,
  updateLogged,
  logout
} = auth.actions;
