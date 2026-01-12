import cn from "classnames";
import styles from "./navigation.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {userSlice} from "../../store/user.slice.ts";

const Navigation = () => {
	const favoriteCount = useAppSelector(userSlice.selectors.favoritesCounters);
	const userName = useAppSelector(userSlice.selectors.getName);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const useLogout = () => {
		dispatch(userSlice.actions.logout());
		navigate("/");
	};

	return (
		<nav className={styles["navigation"]}>
			<NavLink to={"/"} className={({isActive}) => cn(styles["navigation__button"], { [styles["navigation__button--active"]]: isActive})}>Поиск фильмов</NavLink>
			<NavLink to={"/favorites"} className={({isActive}) => cn(styles["navigation__button"], { [styles["navigation__button--active"]]: isActive})}>
                Мои фильмы
				{favoriteCount && favoriteCount > 0 ? <span className={styles["navigation__favorite-count"]}>{favoriteCount}</span> : null}
			</NavLink>
			{userName ?
				<>
					<p className={cn(styles["navigation__button"], styles["navigation__button--user"])}>
						{userName}
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