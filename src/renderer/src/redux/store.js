import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slice/app";


const store = configureStore({
    reducer :{
        app : appReducer
    }
})
export default store