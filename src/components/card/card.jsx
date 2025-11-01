import styles from "./card.module.css";
import cn from "classnames";


const Card = ({props, setData}) => {
	const {name, rating, url, isFavorite, id} = props;

	const onClick = () => {
		setData(id);
	};


	return (
		<article className={styles.card}>
			<img src={url} alt={name} className={styles["card__img"]} />
			<span className={styles["card__rating"]}>{rating}</span>
			<p className={styles["card__title"]}>{name}</p>
			<button className={cn(styles["card__btn"], {
				[styles["card__btn--favorite"]]: isFavorite
			})} onClick={onClick}>
				{isFavorite
					? <><img src="/public/bookmark-favorite.png" alt="" />В избранном</>
					: <><img src="/public/like.png" alt="" />В избранное</>
				}
			</button>
		</article>
	);
};



export default Card;
