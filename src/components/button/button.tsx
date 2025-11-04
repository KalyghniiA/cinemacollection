import styles from "./button.module.css";
import type {ButtonProps} from "./button.props.ts";

function Button  ({children, ...props}:ButtonProps) {
	return (<button className={styles.button} {...props}>{children}</button>);
};

export default Button;