import styles from "./search-form.module.css";
import {type FormEvent, useRef} from "react";
import Input from "../input/input.tsx";
import Button from "../button/button.tsx";
import type {SearchFormProps} from "./search-form.props.ts";

const SearchForm = ({setSearchValue}:SearchFormProps) => {
	const inputRef = useRef<HTMLInputElement>(null);


	const useSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (inputRef.current) {
			setSearchValue(inputRef.current.value);
			inputRef.current.value = "";
		}
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