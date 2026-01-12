import styles from "./card-list.module.css";
import type {CardListProps} from "./card-list.props.ts";
import Title from "../title/title.tsx";
import {NotResult} from "../not-result/not-result.tsx";
import {lazy, useEffect, useState} from "react";
import {Error} from "../error/error.tsx";
const Card = lazy(() => import("../../components/card/card.tsx"));
function CardList ({data, isLoading, isError}: CardListProps) {

	const [visibleElement, setVisibleElement] = useState<number>(4);

	useEffect(() => {
		const handleScroll = () => {

			if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
				setVisibleElement(visibleElement + 4);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	useEffect(() => {
		setVisibleElement(4);
	}, [data])


	return (
		<section className={styles["card-list"]}>
			{isLoading
				? <Title>Загрузка</Title>
				: isError
					? <Error />
					: data.length === 0
						? <NotResult />
						: data.map((item, index) =>
							index < visibleElement && (<Card
								data={{...item}} isFavorite={false} key={item["#IMDB_ID"]}
								 />))

			}
		</section>
	);
}

export default CardList;