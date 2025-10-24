import cn from "classnames";
import styles from "./navigation.module.css";
import {useState} from "react";

const Navigation = ({favoriteCount, onClick, isLogin, userName}) => {
	const [loginStatus, setLoginStatus] = useState(isLogin);

	const useLogout = () => {
		setLoginStatus(false);
	};

	return (
		<nav className={styles["navigation"]}>
			<button className={cn(styles["navigation__button"], styles["navigation__button--active"])} onClick={onClick}>Поиск фильмов</button>
			<button className={styles["navigation__button"]} onClick={onClick}>
                Мои фильмы
				{favoriteCount > 0 ? <span className={styles["navigation__favorite-count"]}>{favoriteCount}</span> : null}
			</button>
			{loginStatus ?
				<>
					<button className={cn(styles["navigation__button"], styles["navigation__button--user"])}>
						{userName}
						<img src="/public/user.svg" alt="user" />
					</button>
					<button className={styles["navigation__button"]} onClick={useLogout}>
						Выйти
					</button>
				</> :
				<button className={cn(styles["navigation__button"], styles["navigation__button--login"])}>
					Войти
					<img src="/public/login.svg" alt="login" />
				</button>}
		</nav>
	);
};

export default Navigation;