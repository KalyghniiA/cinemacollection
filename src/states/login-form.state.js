
export const reducerLogin = (state, action) => {
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
			name: undefined,
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
	}
};