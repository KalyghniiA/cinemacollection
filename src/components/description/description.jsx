import "./description.css";

const Description = ({ text, className}) => {
	return (
		<p className={`description ${className}`}>{text}</p>
	);
};

export default Description;