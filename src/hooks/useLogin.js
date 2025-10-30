import {useEffect, useReducer} from "react";
import {reducerLogin} from "../states/login-form.state.js";

const INITIAL_STATE = {
	name: "",
	favorite: []
};


export const useLogin = () => {
	const [state, dispatch] = useReducer(reducerLogin, INITIAL_STATE);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("user"));
		if (data) {
			dispatch({type: "START", payload: data});
		}
	},[]);

	useEffect(() => {
		state.name
			? localStorage.setItem("user", JSON.stringify(state))
			: localStorage.removeItem("user");
	}, [state]);

	return [state, dispatch];
};