import styles from "./description.module.css";
import cn from "classnames";
import type {DescriptionProps} from "./description.props.ts";

function Description ({children}:DescriptionProps) {
	return (
		<p className={cn(styles.description)}>{children}</p>
	);
};

export default Description;