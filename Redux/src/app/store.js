import {configureStore} from "@reduxjs/toolkit"
import userDetails from "./Features/userDetailSlice"

export const store = configureStore({
    reducer:{
        userDetails: userDetails
    }
})

