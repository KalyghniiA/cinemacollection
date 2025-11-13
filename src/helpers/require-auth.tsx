import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";

export function RequireAuth({children}: {children: ReactNode}) {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
        return <Navigate to={"/login"} />
    }

    return children;
}