import type {HTMLAttributes, ReactNode} from "react";

export interface BodySectionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}