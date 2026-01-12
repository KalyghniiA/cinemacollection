import styles from "./login-form.module.css";
import Input from "../input/input.tsx";
import Button from "../button/button.tsx";
import {type FormEvent, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/store.ts";
import {userSlice} from "../../store/user.slice.ts";

const LoginForm = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (inputRef.current && inputRef.current.value.trim() !== "") {
			const name = inputRef.current.value;
			dispatch(userSlice.actions.login({name}));
			navigate("/");
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