import styles from "./card-list.module.css";
import type {CardListProps} from "./card-list.props.ts";

function CardList ({children}: CardListProps) {
	return (
		<section className={styles["card-list"]}>{children}</section>
	);
};

export default CardList;