import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../store/store.ts";
import {userSlice} from "../store/user.slice.ts";

export function RequireAuth({children}: {children: ReactNode}) {
    const jwt = useAppSelector(userSlice.selectors.getJwt);
    if (!jwt) {
        return <Navigate to={"/login"} />
    }

    return children;
}