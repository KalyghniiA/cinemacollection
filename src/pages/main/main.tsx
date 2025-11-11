import Title from "../../components/title/title.tsx";
import Description from "../../components/description/description.tsx";
import SearchForm from "../../components/search-form/search-form.tsx";
import BodySection from "../../components/body-section/body-section.tsx";
import CardList from "../../components/card-list/card-list.tsx";
import { useEffect, useState} from "react";
import type {CardDataInterface} from "../../interfaces/CardData.interface.ts";
import axios from "axios";
import {API} from "../../helpers/API.ts";



export function Main () {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [items, setItems] = useState<CardDataInterface[]>([])
    const [searchValue, setSearchValue] = useState<string>("Avengers");




    const getData = async (path: string) => {
        try {
            setIsLoading(true);
            const {data} = await axios.get(`${API}/?q=${path}`);
            setIsLoading(false);
            setItems(data.description);
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
            console.error(e);
        }
    }

    useEffect(() => {
        getData(searchValue);
    }, []);

    useEffect(() => {
        getData(searchValue);
    }, [searchValue]);


    return (
        <>
            <BodySection>
                <Title>
                    Поиск
                </Title>
                <Description>
                    Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
                </Description>
                <SearchForm setSearchValue={setSearchValue}/>
            </BodySection>
            <CardList data={items} isError={isError} isLoading={isLoading}/>
        </>
    );
}