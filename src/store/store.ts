import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector, useStore} from "react-redux";
import {userSlice} from "./user.slice.ts";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
    }
})


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>()