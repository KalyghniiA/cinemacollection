import styles from "./search-form.module.css";
import {type FormEvent, useRef, useState} from "react";
import Input from "../input/input.tsx";
import Button from "../button/button.tsx";

const SearchForm = () => {
	const [formData, setFormData] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);

	const useSubmit = (e: FormEvent) => {
		e.preventDefault();
		const value = inputRef.current;
		if (value) {
			setFormData(value.value);
		}
		console.log(formData);
	};

	return (
		<form className={styles["search-form"]} onSubmit={useSubmit}>
			<Input
				className={"input__search"}
				type={"text"}
				name="search"
				placeholder={"Введите название"}
				ref={inputRef}
			/>
			<Button
				type={"submit"}
			>Поиск</Button>
		</form>
	);
};

export default SearchForm;