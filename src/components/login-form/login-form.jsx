import styles from "./login-form.module.css";
import Input from "../input/input.jsx";
import Button from "../button/button.jsx";
import {useContext, useRef} from "react";
import {UserContext} from "../../context/user.context.jsx";

const LoginForm = () => {
	const inputRef = useRef();
	const context = useContext(UserContext);

	const onSubmit = (e) => {
		e.preventDefault();
		context.dispatch({type:"LOGIN", payload:inputRef.current.value});
	};



	return (
		<form className={styles["login-form"]} onSubmit={onSubmit}>
			<Input
				type={"text"}
				name={"username"}
				placeholder={"Ваше имя"}
				ref={inputRef}
			/>
			<Button
				text={"Войти в профиль"}
				type={"submit"}
			/>
		</form>
	);
};

export default LoginForm;