import "./App.css";
import UserContextProvider from "./context/user.context.tsx";
import {NotFound} from "./pages/not-found/not-found.tsx";
import {Layout} from "./layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "./pages/main/main.tsx";
import {Favorite} from "./pages/favorite/favorite.tsx";
import {Login} from "./pages/login/login.tsx";
import axios from "axios";
import {API} from "./helpers/API.ts";
import {lazy} from "react";
import {Error} from "./components/error/error.tsx";

const Item = lazy(() => import("./pages/item/item.tsx"));

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
				element: <Item />,
				errorElement: <Error />,
				loader: async ({params}) => {
					const { data } = await axios.get(`${API}/?tt=${params.id}`);
					return data;
				}
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
