import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICharacter} from "../../models";

interface RickAndMortyState {
    characters: any,
    character: ICharacter | null,
    locations: any,
    location: any,
    charactersAreLoading: boolean,
    charactersAreError: string,
}

const initialState: RickAndMortyState = {
    characters: null,
    character: null,
    location: null,
    locations: null,
    charactersAreLoading: true,
    charactersAreError: '',
}

export const RickAndMortySlice = createSlice({
    name: 'RickAndMorty',
    initialState,
    reducers: {
        setCharacters(state, action: PayloadAction<any>) {
            return {
                ...state,
                characters: action.payload,
                charactersAreLoading: false
            }
        },

        setIsLoadingCharacters(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                charactersAreLoading: action.payload
            }
        },

        setErrorCharacters(state, action: PayloadAction<string>) {
            return {
                ...state,
                charactersAreError: action.payload
            }
        },

        setCharacter(state, action: PayloadAction<any>) {
            return {
                ...state,
                character: action.payload,
                charactersAreLoading: false
            }
        },

        setLocations(state, action: PayloadAction<any>) {
            return {
                ...state,
                locations: action.payload,
                charactersAreLoading: false
            }
        },

        setLocation(state, action: PayloadAction<any>) {
            return {
                ...state,
                location: action.payload,
                charactersAreLoading: false
            }
        },
    }
})

export const rickAndMortyActions = RickAndMortySlice.actions
export const rickAndMortyReducer = RickAndMortySlice.reducer