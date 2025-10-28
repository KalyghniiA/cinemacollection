import styles from "./login-form.module.css";
import Input from "../input/input.jsx";
import Button from "../button/button.jsx";
import {useRef} from "react";

const LoginForm = ({onLogin}) => {
	const inputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		onLogin({type:"LOGIN", payload:inputRef.current.value});
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