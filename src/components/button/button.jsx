import "./button.css";

const Button = ({text, className, type, onClick}) => {
	return (<button className={`button ${className}`} type={type} onClick={onClick}>{text}</button>);
};

export default Button;