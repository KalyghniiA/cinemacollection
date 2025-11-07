import type {HTMLProps, MouseEventHandler} from "react";

export interface NavigationProps extends HTMLProps<HTMLDivElement> {
    onClick?: MouseEventHandler,
    favoriteCount?: number,
}