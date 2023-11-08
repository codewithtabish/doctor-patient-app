 import { createSlice } from '@reduxjs/toolkit'
 const appSlice=createSlice({
    name:"app",
    initialState:{
        isDarkMode:false,
        favArray:["a","a"],
        bannerImage:null,
        appDialouge:false

    },
    reducers:{
        toggleAppMode:(state,action)=>{
            state.isDarkMode=action.payload
        },
        assignToFavArray:(state,action)=>{
            state.favArray=action.payload
        },
        assignToBannerImage:(state,action)=>{
            state.bannerImage=action.payload
        },
        assignToDialouge:(state,action)=>{
            state.appDialouge=action.payload
        }
   

        
    }
 })


 export const {toggleAppMode,assignToFavArray,assignToBannerImage,
assignToDialouge}=appSlice.actions

 export const selectIsDarkMode = (state) => state.app.isDarkMode;
 export const selectFavArray = (state) => state.app.favArray;





 export default appSlice.reducer

 