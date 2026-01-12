import styles from "./card.module.css";
import cn from "classnames";
import type {CardProps} from "./card.props.ts";
import {NavLink, useNavigate} from "react-router-dom";
import {type MouseEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {userSlice} from "../../store/user.slice.ts";


function Card ({...props}: CardProps ) {
	const {data} = props;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isFavorite, setIsFavorite] = useState(false);
	const favoritesSelector = useAppSelector(userSlice.selectors.favoritesFilms);
	const jwt = useAppSelector(userSlice.selectors.getJwt)

	useEffect(() => {
		if (favoritesSelector.find((el) => el.id === data["#IMDB_ID"])) {
			setIsFavorite(true);
		}
	}, []);

	useEffect(() => {
		if (!favoritesSelector.find((el) => el.id === data["#IMDB_ID"])) {
			setIsFavorite(false);
		}
	}, [favoritesSelector]);

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!jwt) {
			navigate("/login");
			return;
		}
		console.log(data["#IMDB_ID"]);
		dispatch(userSlice.actions.toggleFavorite({
			film:{
				id:data["#IMDB_ID"],
				name: data["#TITLE"],
				image: data["#IMG_POSTER"],
				rating: data["#RANK"]
		}}));
		setIsFavorite(!isFavorite);
	};


	return (
		<NavLink to={`/movie/${data["#IMDB_ID"]}`} className={styles.card} >
			<img src={data["#IMG_POSTER"]} alt={data["#TITLE"]} className={styles["card__img"]} />
			<span className={styles["card__rating"]}>{data["#RANK"]}</span>
			<p className={styles["card__title"]}>{data["#TITLE"]}</p>
			<button className={cn(styles["card__btn"], {
				[styles["card__btn--favorite"]]: isFavorite
			})} onClick={onClick}>
				{isFavorite
					? <><img src="/public/bookmark-favorite.png" alt="" />В избранном</>
					: <><img src="/public/like.png" alt="" />В избранное</>
				}
			</button>
		</NavLink>
	);
}



export default Card;
