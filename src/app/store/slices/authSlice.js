import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'
import jwt_decode from "jwt-decode";

let initialState ={
  isAuth: false,
  currentUser: null,
  tokenExp: 0,
  user: null
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      localStorage.setItem("token", action.payload.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;

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
      state.isAuth = false,
      state.currentUser = null,
      state.tokenExp = 0
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut, setUser  } = authSlice.actions


export const signUp = (user) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signup`, user)
}

export const signIn = (user) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signin`, user).then(res => {
    dispatch(authorize(res.data))
  })
}
export const getUserById = (id) => (dispatch) => {
  axios.get(`${END_POINT}/api/getUserInfoById/${id}`).then(res => {
    dispatch(setUser(res.data))
  })
}

export default authSlice.reducer