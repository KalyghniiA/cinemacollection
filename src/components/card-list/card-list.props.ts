import type {HTMLAttributes} from "react";
import type {CardDataInterface} from "../../interfaces/CardData.interface.ts";

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
    data: CardDataInterface[];
    isLoading: boolean;
    isError: boolean;
}