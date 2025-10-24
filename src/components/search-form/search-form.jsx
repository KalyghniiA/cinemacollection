import styles from "./search-form.module.css";
import {useState} from "react";
import Input from "../input/input.jsx";
import Button from "../button/button.jsx";

const SearchForm = () => {
	const [formData, setFormData] = useState(undefined);

	const useSubmit = (e) => {
		e.preventDefault();
		setFormData(new FormData(e.target));
		console.log(formData);
	};

	return (
		<form className={styles["search-form"]} onSubmit={useSubmit}>
			<Input
				className={"input__search"}
				type={"text"}
				name="search"
				placeholder={"Введите название"}

			/>
			<Button
				text={"Искать"}
				type={"submit"}
			/>
		</form>
	);
};

export default SearchForm;