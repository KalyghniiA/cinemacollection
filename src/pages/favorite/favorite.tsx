import Title from "../../components/title/title.tsx";
import CardList from "../../components/card-list/card-list.tsx";
import BodySection from "../../components/body-section/body-section.tsx";
import type {CardDataInterface} from "../../interfaces/CardData.interface.ts";
import {useEffect, useState} from "react";

export function Favorite() {
    const data:CardDataInterface[] = [];
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        setIsError(false);
    }, [])

    return (
        <>
            <BodySection>
                <Title>
                    Избранное
                </Title>
             </BodySection>
            <CardList data={data} isLoading={isLoading} isError={isError} />
        </>
    );
}