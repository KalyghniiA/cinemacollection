import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type FavoriteFilm = {
    id: string;
    name: string;
    image: string;
    rating: number;
}

type UserState = {
    jwt: string | undefined;
    name: string | undefined;
    favorites: FavoriteFilm[]
}

type JwtId = string;

type LocalStorageData = Record<JwtId, UserState | undefined>;

const initialState: UserState = {
    jwt: undefined,
    name: undefined,
    favorites: []
}

function updateLocalStorage (state: UserState) {
    const jsonData = localStorage.getItem("data");
    const storage = jsonData ? JSON.parse(jsonData) as LocalStorageData : {};
    const updateStorage: LocalStorageData = {
        ...storage,
        [state.jwt as string]: state,
    }
    localStorage.setItem("data", JSON.stringify(updateStorage));
}

function checkData (jwt: JwtId) {
    const storage = localStorage.getItem("data");
    if (!storage) {
        return false;
    }
    const data = JSON.parse(storage) as LocalStorageData;

    return !!data[jwt];
}

function getData (jwt: JwtId) {
    const storage = localStorage.getItem("data");
    if (!storage) {
        return undefined;
    }
    const data = JSON.parse(storage) as LocalStorageData;

    return data[jwt];
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    selectors: {
        getName: state => state.name,
        favoritesCounters: (state) => state.favorites.length,
        favoritesFilms: (state) => state.favorites,
        getJwt: state => state.jwt
    },
    reducers: {
        login: (state: UserState, action: PayloadAction<{name: string}>) => {
            const {name} = action.payload;
            if (checkData(name)) {
                const data = getData(name);
                if (data) {
                    state.name = data.name;
                    state.jwt = data.jwt;
                    state.favorites = [...data.favorites];
                }
            } else {
                state.name = name;
                state.jwt = name;
            }
            updateLocalStorage(state);
        },
        logout: (state: UserState) => {
            updateLocalStorage(state);
            state.name = undefined;
            state.jwt = undefined;
            state.favorites = [];
        },
        toggleFavorite: (state: UserState, action: PayloadAction<{film: FavoriteFilm}>) => {
            const {id: favoriteFilmId } = action.payload.film;
            const id = state.favorites.findIndex((f: FavoriteFilm) => f.id === favoriteFilmId);
            if (id !== -1) {
                state.favorites.splice(id, 1);
            } else {
                const {film} = action.payload;
                state.favorites = [...state.favorites, film];
            }
            updateLocalStorage(state);
        },
    }
})