import {createSlice} from '@reduxjs/toolkit';


const initialState = [ 
    {id: "0", name:"Bello"},
    {id: "1", name:"sam"},
    {id: "2", name:"ibrahim"}
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    }
})

export const selectAllUsers = (state) => state.users
export default userSlice.reducer