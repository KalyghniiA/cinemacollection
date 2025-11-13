import styles from "./card.module.css";
import cn from "classnames";
import type {CardProps} from "./card.props.ts";
import {NavLink, useNavigate} from "react-router-dom";
import type {MouseEvent} from "react";


function Card ({...props}: CardProps ) {
	const {data, setData, isFavorite} = props;
	const navigate = useNavigate();

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const jwt = localStorage.getItem("jwt");
		if (!jwt) {
			navigate("/login");
			return;
		}
		console.log(data["#IMDB_ID"])
		setData(data["#IMDB_ID"]);
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
