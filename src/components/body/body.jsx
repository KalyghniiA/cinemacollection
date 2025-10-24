import {body} from "./body.module.css";

const Body = ({children}) => {
	return (
		<main className={body}>
			{children}
		</main>
	);
};

export default Body;