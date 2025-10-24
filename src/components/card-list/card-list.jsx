import "./card-list.css";

const CardList = ({children}) => {
	return (
		<section className="card-list">{children}</section>
	);
};

export default CardList;