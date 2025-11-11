import {Await, useLoaderData} from "react-router-dom";
import type {CardDataDetailsInterface} from "../../interfaces/CardData.interface.ts";
import {Suspense} from "react";
import Title from "../../components/title/title.tsx";
import {Error} from "../../components/error/error.tsx";

function Item() {
    const response = useLoaderData() as CardDataDetailsInterface;


    return (
        <Suspense fallback={<Title>Загружаю.....</Title>}>
            <Await resolve={response} errorElement={<Error />}>
                {(data) =>
                    <>
                        <p>{data.short.name}</p>
                        <p>{data.short.description}</p>
                        <p>{data.short.alternateName}</p>
                        <img src={data.short.image} alt={data.short.name} width={400} height={400} />

                     </>}
            </Await>
        </Suspense>
    )
}

export default Item;
