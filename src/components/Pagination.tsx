import React, {useEffect} from 'react';
import {Button} from '@mui/material'
import {useAppDispatch, useAppSelector} from "../hooks";
import {paginationCharacters} from "../store/rick_&_morty";
export const Pagination = () => {
    const dispatch = useAppDispatch()
    const { characters, charactersAreLoading } = useAppSelector(state => state.rickAndMortyReducer)

    const nextPage = () => {
        dispatch(paginationCharacters(characters.info.next))
    }

    const prevPage = () => {
        dispatch(paginationCharacters(characters.info.prev))
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px', margin: '15px'}}>
            <Button
                variant='outlined'
                color='inherit'
                disabled={!(characters && characters.info.prev)}
                onClick={prevPage}
            >
                Prev
            </Button>
            <Button
                variant='outlined'
                color='inherit'
                disabled={!(characters && characters.info.next)}
                onClick={nextPage}
            >
                Next
            </Button>
        </div>
    );
};