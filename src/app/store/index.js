import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import commentReducer from './slices/commentSlice'
import storyReducer from './slices/storySlice'
import LikeReducer from './slices/LikeSlice'
import subscriptionReducer from './slices/subscriptionSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    comment: commentReducer,
    story: storyReducer,
    like: LikeReducer,
    subscription: subscriptionReducer
  }
})