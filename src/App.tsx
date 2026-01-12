import "./App.css";
import UserContextProvider from "./context/user.context.tsx";
import {Layout} from "./layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "./pages/main/main.tsx";
import {Favorite} from "./pages/favorite/favorite.tsx";
import {Login} from "./pages/login/login.tsx";
import axios from "axios";
import {API} from "./helpers/API.ts";
import {lazy} from "react";
import {Error} from "./components/error/error.tsx";
import {NotFound} from "./pages/not-found/not-found.tsx";
import {RequireAuth} from "./helpers/require-auth.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

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
				element: <RequireAuth><Favorite /></RequireAuth>
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
			<Provider store={store}><RouterProvider router={router}/></Provider>
		</UserContextProvider>
	);
}

export default App;
