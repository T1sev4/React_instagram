import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'
import jwt_decode from "jwt-decode";

export const postSlice = createSlice({
  name: 'post',
  initialState:{
    posts: []
  },
  reducers: {
    setMyPosts: (state, action) => {
      state.posts = action.payload.posts
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setMyPosts  } = postSlice.actions


export const getMyPosts = () => (dispatch) => {
  axios.get(`${END_POINT}/api/post/getAllUserPosts`).then(res => {
    dispatch(setMyPosts({posts: res.data}))
  })
}



export default postSlice.reducer