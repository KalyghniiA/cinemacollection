import styles from "./body.module.css";
import type {BodyProps} from "./body.props.ts";

function Body ({children}:BodyProps) {
	return (
		<main className={styles.body}>
			{children}
		</main>
	);
}

export default Body;