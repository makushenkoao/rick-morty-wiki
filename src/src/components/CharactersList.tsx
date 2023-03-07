import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllCharacters} from "../store/rick_&_morty";
import {CharacterItem} from ".";
import {Grid, Pagination, PaginationItem} from "@mui/material";
import {ArrowBack, ArrowForward} from '@mui/icons-material'

export const CharactersList = () => {
    const dispatch = useAppDispatch()
    const {
        characters
    } = useAppSelector(state => state.rickAndMortyReducer)

    useEffect(() => {
        dispatch(getAllCharacters())
    }, [])

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {characters  && characters.results.map((character: any) =>
                <Grid item xs={2} sm={4} md={4} key={character.id}>
                    <CharacterItem
                        key={character.id}
                        character={character}
                    />
                </Grid>
            )}
        </Grid>
    )
};
