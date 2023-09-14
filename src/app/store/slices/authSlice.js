import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'
import jwt_decode from "jwt-decode";
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    currentUser: null,
    tokenExp: 0,
  },
  reducers: {
    authorize: (state, action) => {
      const decoded = jwt_decode(action.payload.token);
      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        full_name: decoded.full_name,
        username: decoded.username,
        phone: decoded.phone
      }
      state.isAuth = true
      state.tokenExp = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut  } = authSlice.actions


export const signUp = (user) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signup`, user)
}

export const signIn = (user) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signin`, user).then(res => {
    dispatch(authorize(res.data))
  })
}

export default authSlice.reducer