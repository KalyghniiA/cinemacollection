import "./search-form.css";
import {useState} from "react";

const SearchForm = ({children}) => {
	const [formData, setFormData] = useState(undefined);

	const useSubmit = (e) => {
		e.preventDefault();
		setFormData(new FormData(e.target));
		console.log(formData);
	};

	return (
		<form className="search-form" onSubmit={useSubmit}>
			{children}
		</form>
	);
};

export default SearchForm;