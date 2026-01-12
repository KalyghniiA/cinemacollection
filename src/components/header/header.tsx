import styles from "./header.module.css";
import type {HeaderProps} from "./header.props.ts";

function Header ({children}:HeaderProps) {
	return (
		<header className={styles.header}>
			{children}
		</header>
	);
};


export default Header;