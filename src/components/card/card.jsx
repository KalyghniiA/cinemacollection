import "./card.css";

const Card = ({props, setData}) => {
	const {name, rating, url, isFavorite, id} = props;

	const onClick = () => {
		setData(id);

	};

	return (
		<article className="card">
			<img src={url} alt={name} className="card__img" />
			<span className="card__rating">{rating}</span>
			<p className="card__title">{name}</p>
			<button className={`card__btn ${isFavorite ? "card__btn--favorite" : ""}`} onClick={onClick}>
				{isFavorite
					? <><img src="/public/bookmark-favorite.png" alt="" />В избранном</>
					: <><img src="/public/like.png" alt="" />В избранное</>
				}
			</button>
		</article>
	);
};

export default Card;