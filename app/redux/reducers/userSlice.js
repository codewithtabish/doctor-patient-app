import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        isLogin:false,
        loginToken:null
    },
    reducers:{
        assignToLoginState:(state,action)=>{
            state.isLogin=action.payload
        },
        assignToLoginToken:(state,action)=>{
            state.loginToken=action.payload
        }
    }

})




export const {assignToLoginState,assignToLoginToken} =userSlice.actions

// export const selectIsLoginFlow = (state) => state.app.isLogin;


export default userSlice.reducer