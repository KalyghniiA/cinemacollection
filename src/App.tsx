import "./App.css";
import UserContextProvider from "./context/user.context.tsx";
import {NotFound} from "./pages/not-found/not-found.tsx";
import {Layout} from "./layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "./pages/main/main.tsx";
import {Favorite} from "./pages/favorite/favorite.tsx";
import {Item} from "./pages/item/item.tsx";
import {Login} from "./pages/login/login.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Main />
			},
			{
				path: "/favorites",
				element: <Favorite />
			},
			{
				path: "/movie/:id",
				element: <Item />
			},
			{
				path: "/login",
				element: <Login />
			},
			{
				path: "*",
				element: <NotFound />
			}
		]
	}
]);

function App() {
	return (
		<UserContextProvider>
			<RouterProvider router={router}/>
		</UserContextProvider>
	);
}

export default App;
