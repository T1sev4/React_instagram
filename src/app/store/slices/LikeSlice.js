import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'

export const likeSlice = createSlice({
  name: 'like',
  initialState:{
    likes: [],
  },
  reducers: {
    setLikes: (state, action) => {
      state.likes = action.payload.likes
    },
  
    // appendPost: (state, action) => {
    //   state.posts = [...state.posts, action.payload.newpost]
    // },
    // handleDeletePost: (state, action) => {
    //   let posts = [...state.posts];
    //   posts = posts.filter(item => item.id !== action.payload)
    //   state.posts = posts
    // }
  },
})

// Action creators are generated for each case reducer function
export const { setLikes } = likeSlice.actions


export const getPostLikes = (id) => (dispatch) => {
  axios.get(`${END_POINT}/api/like/get-likes-by-post/${id}`).then(res => {
    dispatch(setLikes({likes: res.data}))
  })
}

// export const createPost = (data) => async (dispatch) => {
//   try {
//     axios.post(`${END_POINT}/api/post/newPost`, data).then(res => {
//       dispatch(appendPost({newpost: res.data}))
//     })
//   } catch (error) {
//     console.log(error);
//     alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
//   }
// }

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     const res = await axios.delete(`${END_POINT}/api/post/deletePostByID/${id}`)
//     dispatch(handleDeletePost(id));
//   } catch (error) {
//     console.log(error);
//     alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
//   }
// }


export default likeSlice.reducer