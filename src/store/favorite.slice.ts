import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type FavoriteFilm = {
    id: string;
    name: string;
    image: string;
    rating: number;
}

type FavoriteFimId = string;

export type FavoriteFilms = Record<FavoriteFimId, FavoriteFilm | undefined>

export type FavoriteState = {
    favorites: FavoriteFilms;
    favoritesId: FavoriteFimId[];
}

export const initialState: FavoriteState = {
    favorites: {},
    favoritesId: [],
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    selectors: {
        favoritesId: (state) => state.favoritesId,
        favoritesCounters: (state) => state.favoritesId.length,
        favoritesFilms: (state) => state.favorites
    },
    reducers: {
        toggleFavorite: (state: FavoriteState, action: PayloadAction<{film: FavoriteFilm}>) => {
            const {id} = action.payload.film;
            if (state.favoritesId.includes(id)) {
                delete state.favorites[id];
                state.favoritesId = state.favoritesId.filter(filmId => filmId !== id);
            } else {
                const {film} = action.payload;
                state.favoritesId.push(id);
                state.favorites[id] = film;
            }
        }
    }
})