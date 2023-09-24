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
      state.comments = [...state.comments, action.payload.comment]
    },
    handleDeleteComment: (state, action) => {
      let comments = [...state.comments];
      comments = comments.filter(item => item.id !== action.payload)
      state.comments = comments
    }
  },
})

// Action creators are generated for each case reducer function
export const {  setComments, appendComment, handleDeleteComment } = commentSlice.actions

export const getCommentsByPostId = (id) => (dispatch) => {
    axios.get(`${END_POINT}/api/getComments/${id}`).then(res => {
      dispatch(setComments({comments: res.data}))
    })
}

export const createComment = (data) => async (dispatch) => {
  console.log(data)
  try {
    axios.post(`${END_POINT}/api/newComment`, data).then(res => {
      console.log(res)
      console.log(res.data, 'res data')
      dispatch(appendComment({comment: res.data}))
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
export const deleteComment = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/deleteComment/${id}`)
    dispatch(handleDeleteComment(id));
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}


export default commentSlice.reducer