import "./input.css";

const Input = ({className, type, name, placeholder}) => {
	return (
		<>
			{className === "input__search"
				? <img src="/public/search.png" alt="Search" className="input__search-icon" />
				: ""
			}
			<input className={`input ${className}`} type={type} name={name} id={name} placeholder={placeholder} />
		</>

	);
};

export default Input;