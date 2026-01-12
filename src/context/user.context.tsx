import {type ActionDispatch, createContext, type ReactNode} from "react";
import {useLogin} from "../hooks/useLogin.ts";
import type {ActionType, UserContextProps} from "../states/login-form.state.ts";

interface UserContextProviderProps {
	children: ReactNode;
}

interface IContext {
	state: UserContextProps;
	dispatch: ActionDispatch<[action:ActionType]> | undefined;
}

const INITIAL_STATE: IContext = {
	state: {name: "",
	},
	dispatch: undefined
}

export const UserContext = createContext<IContext>(INITIAL_STATE);

function UserContextProvider  ({ children }: UserContextProviderProps){
	const [state, dispatch] = useLogin();

	return (
		<UserContext.Provider value={{state, dispatch}}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;