import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import userSlice from "./reducers/userSlice";

export const store=configureStore({
    reducer:{
        user:userSlice,
        app:appSlice,
    }
})