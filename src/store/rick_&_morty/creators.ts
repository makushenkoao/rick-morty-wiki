import {rickAndMortyActions} from "./slice";
import axios from "axios";
import {AppDispatch} from "../index";

export const getAllCharacters = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(rickAndMortyActions.setIsLoadingCharacters(true))
        const { data } = await axios.get('https://rickandmortyapi.com/api/character')
        dispatch(rickAndMortyActions.setCharacters(data))
        dispatch(rickAndMortyActions.setIsLoadingCharacters(false))
        dispatch(rickAndMortyActions.setErrorCharacters(''))
    } catch (e: any) {
        dispatch(rickAndMortyActions.setErrorCharacters(e.message))
    }
}


export const searchCharacters = (name: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(rickAndMortyActions.setIsLoadingCharacters(true))
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/?name=' + name)
        dispatch(rickAndMortyActions.setCharacters(data))
        dispatch(rickAndMortyActions.setIsLoadingCharacters(false))
        dispatch(rickAndMortyActions.setErrorCharacters(''))
    } catch (e: any) {
        dispatch(rickAndMortyActions.setErrorCharacters(e.message))
    }
}
export const paginationCharacters = (src: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(rickAndMortyActions.setIsLoadingCharacters(true))
        const { data } = await axios.get(src)
        dispatch(rickAndMortyActions.setCharacters(data))
        dispatch(rickAndMortyActions.setIsLoadingCharacters(false))
        dispatch(rickAndMortyActions.setErrorCharacters(''))
    } catch (e: any) {
        dispatch(rickAndMortyActions.setErrorCharacters(e.message))
    }
}

export const getCharacter = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(rickAndMortyActions.setIsLoadingCharacters(true))
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/' + id)
        dispatch(rickAndMortyActions.setCharacter(data))
        dispatch(rickAndMortyActions.setIsLoadingCharacters(false))
        dispatch(rickAndMortyActions.setErrorCharacters(''))
    } catch (e: any) {
        dispatch(rickAndMortyActions.setErrorCharacters(e.message))
    }
}

export const getAllEpisodes = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(rickAndMortyActions.setIsLoadingCharacters(true))
        const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
        dispatch(rickAndMortyActions.setEpisodes(data))
        dispatch(rickAndMortyActions.setIsLoadingCharacters(false))
        dispatch(rickAndMortyActions.setErrorCharacters(''))
    } catch (e: any) {
        dispatch(rickAndMortyActions.setErrorCharacters(e.message))
    }
}