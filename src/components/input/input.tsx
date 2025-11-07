import styles from "./input.module.css";
import cn from "classnames";
import type {InputProps} from "./input.props.ts";

function Input ({className,ref, ...props}: InputProps) {


	return (
		<>
			{className === "input__search"
				? <img src="/public/search.png" alt="Search" className={styles["input__search-icon"]} />
				: ""
			}
			<input
				className={cn(styles.input, {[styles["input__search"]]: className === "input__search"})}
				ref={ref}
				{...props}
			/>
		</>

	);
}

export default Input;