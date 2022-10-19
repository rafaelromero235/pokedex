import { createSlice } from "@reduxjs/toolkit";
import { initializeConnect } from "react-redux/es/components/connect";

const userNameSlice = createSlice({
    name:'UserName',
    initialState:'',
    reducers:{
        setUserNameGlobal:(state,action)=>action.payload

    }
    
})

export const {setUserNameGlobal} = userNameSlice.actions

export default userNameSlice.reducer