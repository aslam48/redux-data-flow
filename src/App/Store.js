import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../Feature/posts/postsSlice'
import userReducer from '../Feature/User/UserSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: userReducer
    }
})