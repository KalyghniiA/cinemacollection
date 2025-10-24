import styles from "./body-section.module.css";

const BodySection = ({ children }) => {
	return (
		<section className={styles["body-section"]}>
			{children}
		</section>
	);
};

export default BodySection;