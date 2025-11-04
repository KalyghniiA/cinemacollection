import styles from "./card.module.css";
import cn from "classnames";
import type {CardProps} from "./card.props.ts";


function Card ({...props}: CardProps ) {
	const {data, setData} = props;

	const onClick = () => {
		setData(data.id);
	};


	return (
		<article className={styles.card}>
			<img src={data.url} alt={data.name} className={styles["card__img"]} />
			<span className={styles["card__rating"]}>{data.rating}</span>
			<p className={styles["card__title"]}>{data.name}</p>
			<button className={cn(styles["card__btn"], {
				[styles["card__btn--favorite"]]: data.isFavorite
			})} onClick={onClick}>
				{data.isFavorite
					? <><img src="/public/bookmark-favorite.png" alt="" />В избранном</>
					: <><img src="/public/like.png" alt="" />В избранное</>
				}
			</button>
		</article>
	);
};



export default Card;
