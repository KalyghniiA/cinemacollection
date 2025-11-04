export interface UserContextProps {
	name: string;
	favorite: number[]
}

export enum ActionPoints {
	LOGIN = 'LOGIN',
	START = 'START',
	LOGOUT = 'LOGOUT',
	ADD_FAVORITE = 'ADD_FAVORITE',
	REMOVE_FAVORITE = 'REMOVE_FAVORITE',
}

export type ActionType = {
	type: ActionPoints.LOGIN,
	payload: string
} | {
	type: ActionPoints.START,
	payload: UserContextProps
} | {
	type: ActionPoints.LOGOUT
} | {
	type: ActionPoints.ADD_FAVORITE;
	payload: number
} | {
	type: ActionPoints.REMOVE_FAVORITE;
	payload: number
}

export const reducerLogin = (state: UserContextProps, action: ActionType):UserContextProps => {
	switch (action.type) {
	case "LOGIN":
		return {
			...state,
			name: action.payload
		};
	case "START":
		return {
			...state,
			name: action.payload.name,
			favorite: [...state.favorite, ...action.payload.favorite]
		};
	case "LOGOUT":
		return {
			name: "",
			favorite: []
		};
	case "ADD_FAVORITE": 
		return {
			...state,
			favorite:[...state.favorite, action.payload]
		};
	case "REMOVE_FAVORITE":
		return {
			...state,
			favorite: state.favorite.filter(item => item !== action.payload)
		};
		default:
			throw new Error("Unknown action type: " + action.type);
	}
};