import styles from "./input.module.css";
import cn from "classnames";

const Input = ({className, type, name, placeholder}) => {
	return (
		<>
			{className === "input__search"
				? <img src="/public/search.png" alt="Search" className={styles["input__search-icon"]} />
				: ""
			}
			<input className={cn(styles["input"], {[styles["input__search"]]: className === "input__search"})} type={type} name={name} id={name} placeholder={placeholder} />
		</>

	);
};

export default Input;