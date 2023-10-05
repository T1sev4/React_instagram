import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState:{
    followers: [],
    followings: [],
    subscription: {}
  },
  reducers: {
    setFollowers: (state, action) => {
      state.followers = action.payload.followers
    },
     appendFollowers: (state, action) => {
      state.followers = [...state.followers, action.payload.newsubscription]
    },
    setFollowings: (state, action) => {
      state.followings = action.payload.followings
    },
    appendFollowings: (state, action) => {
      state.followings = [...state.followings, action.payload.newsubscription]
    },
    handleDeleteFollower: (state, action) => {
      let followers = [...state.followers];
      followers = followers.filter(item => item.id !== action.payload)
      state.followers = followers
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
export const {setFollowers, appendFollowers, setFollowings, appendFollowings, handleDeleteFollower} = subscriptionSlice.actions


export const getFollowers = (username) => (dispatch) => {
  axios.get(`${END_POINT}/api/subscription/${username}/followers`).then(res => {
    dispatch(setFollowers({followers: res.data}))
  })
}
export const getFollowings = (username) => (dispatch) => {
  axios.get(`${END_POINT}/api/subscription/${username}/following`).then(res => {
    console.log(res.data)
    dispatch(setFollowings({followings: res.data}))
  })
}
export const follow = (id, currentUser) => async (dispatch) => {
  try {
    axios.post(`${END_POINT}/api/${id}/follow`).then(res => {
      dispatch(appendFollowers({newsubscription: {id: currentUser}}))
    })
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
export const unfollow = (id, currentUser) => async (dispatch) => {
  try {
    axios.delete(`${END_POINT}/api/${id}/unfollow`)
    dispatch(handleDeleteFollower(currentUser));
  } catch (error) {
    console.log(error);
    alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
  }
}
// export const deleteStory = (id) => async (dispatch) => {
//   try {
//     const res = await axios.delete(`${END_POINT}/api/post/deleteStory/${id}`)
//     dispatch(handleDeleteStory(id));
//   } catch (error) {
//     console.log(error);
//     alert("Что то пошло не так, сообщите о ошибке тех спецам сайта")
//   }
// }
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


export default subscriptionSlice.reducer