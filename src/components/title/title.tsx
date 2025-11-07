import styles from "./title.module.css";
import cn from "classnames";
import type {TitleProps} from "./title.props.ts";

const Title = ({children, ...props}: TitleProps) => {

	return (
		<h1 className={cn(styles.title)} {...props}>{children}</h1>
	);
};

export default Title;