import styles from "./body-section.module.css";
import type {BodySectionProps} from "./body-section.props.ts";

function BodySection ({ children }: BodySectionProps) {
	return (
		<section className={styles["body-section"]}>
			{children}
		</section>
	);
}

export default BodySection;