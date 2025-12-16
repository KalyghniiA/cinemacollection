import cn from "classnames";
import styles from "./navigation.module.css";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/user.context.tsx";
import {ActionPoints} from "../../states/login-form.state.ts";
import type {NavigationProps} from "./navigation.props.ts";
import {NavLink} from "react-router-dom";

const Navigation = ({favoriteCount}: NavigationProps) => {
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
		localStorage.removeItem("jwt");
	};

	return (
		<nav className={styles["navigation"]}>
			<NavLink to={"/"} className={({isActive}) => cn(styles["navigation__button"], { [styles["navigation__button--active"]]: isActive})}>Поиск фильмов</NavLink>
			<NavLink to={"/favorites"} className={({isActive}) => cn(styles["navigation__button"], { [styles["navigation__button--active"]]: isActive})}>
                Мои фильмы
				{favoriteCount && favoriteCount > 0 ? <span className={styles["navigation__favorite-count"]}>{favoriteCount}</span> : null}
			</NavLink>
			{loginStatus ?
				<>
					<p className={cn(styles["navigation__button"], styles["navigation__button--user"])}>
						{state.name}
						<img src="/public/user.svg" alt="user" />
					</p>
					<button className={styles["navigation__button"]} onClick={useLogout}>
						Выйти
					</button>
				</> :
				<NavLink to={"/login"}
						 className={({isActive}) => cn(styles["navigation__button"],styles["navigation__button--login"], { [styles["navigation__button--active"]]: isActive})}>
					Войти
					<img src="/public/login.svg" alt="login" />
				</NavLink>}
		</nav>
	);
};

export default Navigation;