import styles from "./card-list.module.css";
import type {CardListProps} from "./card-list.props.ts";
import Title from "../title/title.tsx";
import {Error} from "../error/error.tsx";
import {ActionPoints} from "../../states/login-form.state.ts";
import {lazy, useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/user.context.tsx";
const Card = lazy(() => import("../../components/card/card.tsx"));
function CardList ({data, isLoading, isError}: CardListProps) {

	const {state, dispatch} = useContext(UserContext);
	const [visibleElement, setVisibleElement] = useState<number>(4);


	const handleFavorite = (id: string) => {
		if (dispatch && state && state.favorite) {
			state.favorite.find(item => item === id)
				? dispatch({type: ActionPoints.REMOVE_FAVORITE, payload: id})
				: dispatch({type: ActionPoints.ADD_FAVORITE, payload: id});
		}
	};

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
				: isError || data.length === 0
					? <Error />
					: data.map((item, index) =>
						index < visibleElement && (<Card
							data={{...item}} isFavorite={false} key={item["#IMDB_ID"]}
							setData={handleFavorite} />))

			}
		</section>
	);
}

export default CardList;