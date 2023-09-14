import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    currentUser: null,

  },
  reducers: {
    authorize: (state) => {
      state.isAuth = true
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

export default authSlice.reducer