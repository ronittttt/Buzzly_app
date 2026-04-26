import {configureStore} from "@reduxjs/toolkit"
import userReducer from '../features/user/userSlice.js'
import messageReducer from '../features/messages/messagesSlice.js'
import connectionsReducer from '../features/connections/connectionsSlice.js'



export const store = configureStore({
    reducer:{
        user:userReducer,
        connections:connectionsReducer,
        messages:messageReducer
    }
})