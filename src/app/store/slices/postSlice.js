import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'
import jwt_decode from "jwt-decode";

export const postSlice = createSlice({
  name: 'post',
  initialState:{
    posts: [],
    post: {}
  },
  reducers: {
    setMyPosts: (state, action) => {
      state.posts = action.payload.posts
    },
    setPost: (state, action) => {
      state.post = action.payload.post
    },
    appendPost: (state, action) => {
      state.posts = [...state.posts, action.payload.newpost]
    },
    handleDeletePost: (state, action) => {
      let posts = [...state.posts];
      posts = posts.filter(item => item.id !== action.payload)
      state.posts = posts
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMyPosts, appendPost, setPost, handleDeletePost } = postSlice.actions


export const getMyPosts = () => (dispatch) => {
  axios.get(`${END_POINT}/api/post/getAllUserPosts`).then(res => {
    dispatch(setMyPosts({posts: res.data}))
  })
}
export const getPostById = (id) => (dispatch) => {
  axios.get(`${END_POINT}/api/post/getPostByID/${id}`).then(res => {
    dispatch(setPost({post: res.data}))
  })
}

export const createPost = (data) => async (dispatch) => {
  try {
    axios.post(`${END_POINT}/api/post/newPost`, data).then(res => {
      dispatch(appendPost({newpost: res.data}))
    })
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
export const editPost = (data, router) => async (dispatch) => {
  try {
    axios.put(`${END_POINT}/api/post/editPost`, data)
    router.push('/profile')
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/post/deletePostByID/${id}`)
    dispatch(handleDeletePost(id));
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}


export default postSlice.reducer