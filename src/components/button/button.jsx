import {button} from "./button.module.css";

const Button = ({text, type, onClick}) => {
	return (<button className={button} type={type} onClick={onClick}>{text}</button>);
};

export default Button;