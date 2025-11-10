import type {CardDataInterface} from "../../interfaces/CardData.interface.ts";

export interface CardProps {
    data: CardDataInterface;
    isFavorite?: boolean;
    setData: (id: string) => void;
}
