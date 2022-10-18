import {createSlice} from '@reduxjs/toolkit';


const initialState = [ 
    {id: "0", name:"Dude leboski"},
    {id: "1", name:"Neil Yound"},
    {id: "2", name:"Dave Grey"}
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    }
})

export const selectAllUsers = (state) => state.users
export default userSlice.reducer