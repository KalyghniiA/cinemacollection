import "./App.css";
import Button from "./components/button/button.jsx";
import Title from "./components/title/title.jsx";
import Description from "./components/description/description.jsx";
import Body from "./components/body/body.jsx";
import Header from "./components/header/header.jsx";
import Logo from "./components/logo/logo.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import LoginButtons from "./components/login-buttons/login-buttons.jsx";
import BodySection from "./components/body-section/body-section.jsx";
import SearchForm from "./components/search-form/search-form.jsx";
import Input from "./components/input/input.jsx";

function App() {
	const favoriteCount = 2;


	return (
		<>
			<Header>
				<Logo/>
				<Navigation
					favoriteCount={favoriteCount}
					onClick={() => console.log("!")}>
					<LoginButtons
						isLogin={false}
						userName={""}
					/>
				</Navigation>
			</Header>
			<Body>
				<BodySection>
					<Title
						className={""}
						text={"Поиск"}
					/>
					<Description
						className={""}
						text={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."}
					/>
					<SearchForm>

					</SearchForm>
				</BodySection>
				<Button text={"text"} className={"button"}/>
				<Title text={"title"} className={"title"} />
				<Description text={"description"} className={"description"} />
			</Body>

		</>
	);
}

export default App;
