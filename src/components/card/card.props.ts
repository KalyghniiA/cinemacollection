export interface CardProps {
    data: CardData;
    setData: (id: number) => void;
}

export interface CardData {
    id: number,
    name: string,
    rating: number,
    url: string,
    isFavorite: boolean,
    description: string,
}