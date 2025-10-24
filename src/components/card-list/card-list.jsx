import styles from "./card-list.module.css";

const CardList = ({children}) => {
	return (
		<section className={styles["card-list"]}>{children}</section>
	);
};

export default CardList;