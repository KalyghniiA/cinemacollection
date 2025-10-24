import "./login-buttons.css";
import {useState} from "react";

const LoginButtons = ({isLogin, userName}) => {
	const [loginStatus, setLoginStatus] = useState(isLogin);


	const useLogout = () => {
		setLoginStatus(false);
	};

	return (
		loginStatus ?
			<>
				<buttuon className={"navigation__button navigation__button--user"}>
					{userName}
					<img src="/public/user.svg" alt="user" />
				</buttuon>
				<button className={"navigation__button"} onClick={useLogout}>
                        Выйти
				</button>
			</> :
			<button className={"navigation__button navigation__button--login"}>
                    Войти
				<img src="/public/login.svg" alt="login" />
			</button>
			
	);
};

export default LoginButtons;