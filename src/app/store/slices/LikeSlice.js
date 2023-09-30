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
    appendLike: (state, action) => {
      state.likes = [...state.likes, action.payload.like]
    },
    handleDeleteLike: (state, action) => {
      let likes = [...state.likes];
      likes = likes.filter(item => item.id !== action.payload)
      state.likes = likes
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLikes, appendLike, handleDeleteLike } = likeSlice.actions


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

export const deleteLike = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${END_POINT}/api/like/remove-like/${id}`)
    dispatch(handleDeleteLike(id));
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}


export default likeSlice.reducer