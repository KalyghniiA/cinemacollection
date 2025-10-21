import "./title.css";

const Title = ({text, className}) => {
	return (
		<h1 className={`header ${className}`}>{text}</h1>
	);
};

export default Title;