import "./navigation.css";

const Navigation = ({favoriteCount, onClick, children}) => {

	return (
		<nav className="navigation">
			<button className="navigation__button navigation__button--active" onClick={onClick}>Поиск фильмов</button>
			<button className={"navigation__button"} onClick={onClick}>
                Мои фильмы
				{favoriteCount > 0 ? <span className={"navigation__favorite-count"}>{favoriteCount}</span> : null}
			</button>
			{children}
		</nav>
	);
};

export default Navigation;