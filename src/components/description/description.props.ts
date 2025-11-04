import type {HTMLAttributes, ReactNode} from "react";

export interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}