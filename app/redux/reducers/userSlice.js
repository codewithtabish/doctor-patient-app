import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        isLogin:true,
        loginToken:null,
        loginUser:{}
    },
    reducers:{
        assignToLoginState:(state,action)=>{
            state.isLogin=action.payload
        },
        assignToLoginToken:(state,action)=>{
            state.loginToken=action.payload
        },
        assignToLoginUserData:(state,action)=>{
            state.loginUser=action.payload
        }
    }

})




export const {assignToLoginState,assignToLoginToken,assignToLoginUserData} =userSlice.actions

// export const selectIsLoginFlow = (state) => state.app.isLogin;


export default userSlice.reducer