import cn from "classnames";
import styles from "./navigation.module.css";
import {useEffect, useState} from "react";

const Navigation = ({favoriteCount, onClick, userName, dispatchLogin}) => {
	const [loginStatus, setLoginStatus] = useState(false);

	useEffect(() => {
		if (userName) {
			setLoginStatus(true);
		}
	},[userName]);

	const useLogout = () => {
		setLoginStatus(false);
		dispatchLogin({type:"LOGOUT"});
		localStorage.removeItem("user");
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