import {description} from "./description.module.css";
import cn from "classnames";

const Description = ({ text, className}) => {
	return (
		<p className={cn(description, {
			[className]: className
		})}>{text}</p>
	);
};

export default Description;