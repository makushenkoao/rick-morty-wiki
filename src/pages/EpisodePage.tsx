import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllEpisodes} from "../store/rick_&_morty";

export const EpisodePage = () => {
    const dispatch = useAppDispatch();
    const {episodes} = useAppSelector(state => state.rickAndMortyReducer)
    const [selectedEpisode, setSelectedEpisode] = useState('porno')

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    }

    useEffect(() => {
        dispatch(getAllEpisodes())
    }, [])

    return (
        <div>
            {episodes &&
                <FormControl sx={{width: '280px'}}>
                    <InputLabel id="episode-label">Episode</InputLabel>
                    <Select
                        labelId="episode-label"
                        id="episode-select"
                        value={selectedEpisode}
                        label="Episode"
                        MenuProps={MenuProps}
                    >
                        {episodes.results.map((episode: any) =>
                            <MenuItem
                                onClick={(e: any) => setSelectedEpisode(e.target.dataset.value)}
                                key={episode.id} value={episode.name}>{episode.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            }
        </div>
    );
};