import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit'


const initialState = [
    {id:1, title:"learning Redux Toolkit", content: "i have to eat"},
    {id:2, title:"aslam is good just give him time", content: "god will bless time"}
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action){
            state.push(action.payload)
        },
        prepare(title, content, userId){
           return{
            payload:{
                id: nanoid(),
                title,
                content,
                userId
            }
        }
    }
}
}          
})
export const selectAllpost = (state) => state.posts
export const {postAdded} = postsSlice.actions

export default postsSlice.reducer