import type {HTMLAttributes, ReactNode} from "react";

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}