import "./App.css";
import Button from "./components/button/button.jsx";
import Title from "./components/title/title.jsx";
import Description from "./components/description/description.jsx";

function App() {


	return (
		<>
			<Button text={"text"} className={"button"}/>
			<Title text={"title"} className={"title"} />
			<Description text={"description"} className={"description"} />
		</>
	);
}

export default App;
