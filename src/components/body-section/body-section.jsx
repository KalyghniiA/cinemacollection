import "./body-section.css";

const BodySection = ({ children }) => {
	return (
		<section className="body-section">
			{children}
		</section>
	);
};

export default BodySection;