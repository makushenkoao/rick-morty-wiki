import React, {useEffect} from 'react';
import {useAppDispatch} from "../hooks";
import {getAllCharacters} from "../store/rick_&_morty";
import {CharactersList, SearchLocation} from "../components";
import {Container} from "@mui/material";
import {Pagination} from "../components";

export const AllCharactersPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllCharacters())
    }, [])

    return (
        <Container>
            <h1>Characters</h1>
            <SearchLocation />
            <CharactersList />
            <Pagination />
        </Container>
    );
};
