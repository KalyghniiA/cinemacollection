import styles from "./login-form.module.css";
import Input from "../input/input.tsx";
import Button from "../button/button.tsx";
import {type FormEvent, useContext, useRef} from "react";
import {UserContext} from "../../context/user.context.tsx";
import {ActionPoints} from "../../states/login-form.state.ts";

const LoginForm = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const context = useContext(UserContext);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (inputRef.current && context.dispatch) {
			context.dispatch({type:ActionPoints.LOGIN, payload:inputRef.current.value});
		}
	};



	return (
		<form className={styles["login-form"]} onSubmit={onSubmit}>
			<Input
				type={"text"}
				name={"username"}
				placeholder={"Ваше имя"}
				ref={inputRef}
			/>
			<Button type={"submit"}>Войти в профиль</Button>
		</form>
	);
};

export default LoginForm;