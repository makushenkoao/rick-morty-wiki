import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";
import {useAppDispatch, useDebounce} from "../hooks";
import {searchCharacters} from "../store/rick_&_morty";

export const SearchLocation = () => {
    const [search, setSearch] = useState('')
    const dispatch = useAppDispatch()
    const debounce = useDebounce(search)
    useEffect(() => {
        dispatch(searchCharacters(debounce))
    }, [debounce])
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
            <TextField
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search by name'
            />
        </div>
    );
};
