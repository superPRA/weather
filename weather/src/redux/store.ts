import { configureStore } from "@reduxjs/toolkit"
import APIResponses from "./API/APIResponses"
import global from "./global/global"

const store = configureStore({
    reducer:{
        apiResoponse: APIResponses,
        global: global
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store