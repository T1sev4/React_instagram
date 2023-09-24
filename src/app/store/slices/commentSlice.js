import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'

export const commentSlice = createSlice({
  name: 'comment',
  initialState:{
    comments: [],
  },
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload.comments
    },
    appendComment: (state, action) => {
      state.comments = [...state.posts, action.payload.comments]
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setComments, appendComment } = commentSlice.actions

export const getCommentsByPostId = (data) => (dispatch) => {
  console.log(data, 'data')

    axios.get(`${END_POINT}/api/getComments`, data).then(res => {
      console.log(res.data)
      dispatch(setComments({comments: res.data}))
    })
  
 
}

export const createComment = async (data) => async (dispatch) => {
  try {
    axios.post(`${END_POINT}/api/newComment`, data).then(res => {
      dispatch(appendComment({comments: res.data}))
    })
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
// export const editPost = (data, router) => async (dispatch) => {
//   try {
//     axios.put(`${END_POINT}/api/post/editPost`, data)
//     router.push('/profile')
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


export default commentSlice.reducer