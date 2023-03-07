import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICharacter} from "../../models";

interface RickAndMortyState {
    characters: any,
    charactersAreLoading: boolean,
    charactersAreError: string,
}

const initialState: RickAndMortyState ={
    characters: null,
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
    }
})

export const rickAndMortyActions = RickAndMortySlice.actions
export const rickAndMortyReducer = RickAndMortySlice.reducer