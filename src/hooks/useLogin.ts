import {type ActionDispatch, useEffect, useReducer} from "react";
import {ActionPoints, type ActionType, reducerLogin, type UserContextProps} from "../states/login-form.state.ts";

const INITIAL_STATE = {
	name: "",
	favorite: []
};


export const useLogin = (): [UserContextProps, ActionDispatch<[action: ActionType]>] => {
	const [state, dispatch] = useReducer(reducerLogin, INITIAL_STATE);

	useEffect(() => {
		const data = localStorage.getItem("user");
		if (data) {
			dispatch({type: ActionPoints.START , payload: JSON.parse(data)});
		}
	},[]);

	useEffect(() => {
		state.name
			? localStorage.setItem("user", JSON.stringify(state))
			: localStorage.removeItem("user");
	}, [state]);

	return [state, dispatch];
};