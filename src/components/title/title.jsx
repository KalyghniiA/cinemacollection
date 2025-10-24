import {title} from "./title.module.css";
import cn from "classnames";

const Title = ({text, className}) => {
	return (
		<h1 className={cn(title, {[className]:className})}>{text}</h1>
	);
};

export default Title;