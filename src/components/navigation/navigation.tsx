import cn from "classnames";
import styles from "./navigation.module.css";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/user.context.tsx";
import {ActionPoints} from "../../states/login-form.state.ts";
import type {NavigationProps} from "./navigation.props.ts";

const Navigation = ({favoriteCount, onClick}: NavigationProps) => {
	const [loginStatus, setLoginStatus] = useState(false);
	const {state, dispatch} = useContext(UserContext);

	useEffect(() => {
		if (state.name) {
			setLoginStatus(true);
		}
	},[state]);

	const useLogout = () => {
		setLoginStatus(false);
		if (dispatch) {dispatch({type: ActionPoints.LOGOUT})}
		localStorage.removeItem("user");
	};

	return (
		<nav className={styles["navigation"]}>
			<button className={cn(styles["navigation__button"], styles["navigation__button--active"])} onClick={onClick}>Поиск фильмов</button>
			<button className={styles["navigation__button"]} onClick={onClick}>
                Мои фильмы
				{favoriteCount && favoriteCount > 0 ? <span className={styles["navigation__favorite-count"]}>{favoriteCount}</span> : null}
			</button>
			{loginStatus ?
				<>
					<button className={cn(styles["navigation__button"], styles["navigation__button--user"])}>
						{state.name}
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