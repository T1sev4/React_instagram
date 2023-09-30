import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'

export const likeSlice = createSlice({
  name: 'like',
  initialState:{
    likes: [],
    commentLikes: []
  },
  reducers: {
    setLikes: (state, action) => {
      state.likes = action.payload.likes
    },
    setCommentLikes: (state, action) => {
      state.commentLikes = action.payload.likes
    },
    appendLike: (state, action) => {
      state.likes = [...state.likes, action.payload.like]
    },
    appendCommentLike: (state, action) => {
      state.commentLikes = [...state.commentLikes, action.payload.like]
    },
    handleDeleteLike: (state, action) => {
      let likes = [...state.likes];
      likes = likes.filter(item => item.id !== action.payload)
      state.likes = likes
    },
    handleDeleteLikeComment: (state, action) => {
      let commentLikes = [...state.commentLikes];
      commentLikes = commentLikes.filter(item => item.id !== action.payload)
      state.commentLikes = commentLikes
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLikes, appendLike, handleDeleteLike, setCommentLikes, appendCommentLike, handleDeleteLikeComment } = likeSlice.actions


export const getPostLikes = (id) => (dispatch) => {
  axios.get(`${END_POINT}/api/like/get-likes-by-post/${id}`).then(res => {
    dispatch(setLikes({likes: res.data}))
  })
}
export const getStoryLikes = (id) => (dispatch) => {
  axios.get(`${END_POINT}/api/like/get-likes-by-story/${id}`).then(res => {
    dispatch(setLikes({likes: res.data}))
  })
}
export const getCommentLikes = (id) => (dispatch) => {
  axios.get(`${END_POINT}/api/like/get-likes-by-comment/${id}`).then(res => {
    dispatch(setCommentLikes({likes: res.data}))
  })
}

export const createPostLike = (id) => async (dispatch) => {
  try {
    axios.post(`${END_POINT}/api/like/add-like-to-post/${id}`).then(res => {
      dispatch(appendLike({like: res.data}))
    })
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
export const createStoryLike = (id) => async (dispatch) => {
  try {
    axios.post(`${END_POINT}/api/like/add-like-to-story/${id}`).then(res => {
      dispatch(appendLike({like: res.data}))
    })
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
export const createCommentLike = (id) => async (dispatch) => {
  try {
    axios.post(`${END_POINT}/api/like/add-like-to-comment/${id}`).then(res => {
      dispatch(appendCommentLike({like: res.data}))
    })
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}

export const deleteLike = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/like/remove-like/${id}`)
    dispatch(handleDeleteLike(id));
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
export const deleteLikeComment = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/like/remove-like/${id}`)
    dispatch(handleDeleteLikeComment(id));
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}


export default likeSlice.reducer