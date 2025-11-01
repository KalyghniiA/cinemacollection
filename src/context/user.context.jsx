import {createContext} from "react";
import {useLogin} from "../hooks/useLogin.js";


export const UserContext = createContext({name:"", favorite: []});

export const UserContextProvider = ({ children }) => {
	const [state, dispatch] = useLogin();

	return (
		<UserContext.Provider value={{state, dispatch}}>
			{children}
		</UserContext.Provider>
	);
};