import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../Feature/posts/postsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})