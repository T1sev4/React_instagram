import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'
import jwt_decode from "jwt-decode";

export const storySlice = createSlice({
  name: 'post',
  initialState:{
    stories: [],
    post: {}
  },
  reducers: {
    setMyStories: (state, action) => {
      state.stories = action.payload.stories
    },
    handleDeleteStory: (state, action) => {
      let stories = [...state.stories];
      stories = stories.filter(item => item.id !== action.payload)
      state.stories = stories
    }
    // appendStory: (state, action) => {
    //   state.stories = [...state.stories, action.payload.newstory]
    // },
    // setPost: (state, action) => {
    //   state.post = action.payload.post
    // },
    // setUsersPosts: (state, action) => {
    //   state.posts = action.payload.posts
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setMyStories, appendStory, handleDeleteStory } = storySlice.actions


export const getMyStories = () => (dispatch) => {
  axios.get(`${END_POINT}/api/post/userStoriesById`).then(res => {
    dispatch(setMyStories({stories: res.data}))
  })
}
export const createStory = (data) => async (dispatch) => {
  try {
    axios.post(`${END_POINT}/api/post/newStory`, data)
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
export const deleteStory = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/post/deleteStory/${id}`)
    dispatch(handleDeleteStory(id));
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
// export const getUsersPosts = () => (dispatch) => {
//   axios.get(`${END_POINT}/api/post/getAllUsersPosts`).then(res => {
//     dispatch(setUsersPosts({posts: res.data}))
//   })
// }
// export const getPostById = (id) => (dispatch) => {
//   axios.get(`${END_POINT}/api/post/getPostByID/${id}`).then(res => {
//     dispatch(setPost({post: res.data}))
//   })
// }

// export const editPost = (data, router) => async (dispatch) => {
//   try {
//     axios.put(`${END_POINT}/api/post/editPost`, data)
//     router.push('/profile')
//   } catch (error) {
//     console.log(error);
//     alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
//   }
// }


export default storySlice.reducer