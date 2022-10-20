import {createSlice, nanoid} from '@reduxjs/toolkit';

import {sub} from "date-fns"


const initialState = [
    {id:1,
    title:" Redux is is cool", 
    content: "i have to code",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbUP:13,
        wow:3,
        heart:9,
        rocket:8,
       
    }
},


    {id:2,
     title:"I need coffee", 
     content: "i will drink it",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbUP:3,
        wow:3,
        heart:3,
        rocket:9,
                   
    }
    }
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
                 date: new Date().toISOString(),
                userId,
                reactions: {
                    thumbUP:0,
                    wow:0,
                    love:0,
                    rocket:0,
                   
                }
            }
        }
    }
},
reactionAdded(state, action){
    const {postId, reaction} = action.payload
    const existingPost = state.find(post => post.id === postId)
    if (existingPost){
        existingPost.reactions[reaction]++
    }
}
}          
})
export const selectAllpost = (state) => state.posts;

export const {postAdded, reactionAdded} = postsSlice.actions

export default postsSlice.reducer