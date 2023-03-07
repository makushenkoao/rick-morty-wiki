import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getCharacter} from "../store/rick_&_morty";
import {Card, Container, Typography} from "@mui/material";
import {CharacterItem} from "../components";

export const AboutCharactersPage = () => {
    const {id} = useParams()

    const dispatch = useAppDispatch()
    const {character} = useAppSelector(state => state.rickAndMortyReducer)

    useEffect(() => {
        dispatch(getCharacter(id))
    }, [])

    console.log(character);

    return (
        <Container>
            <div style={{maxWidth: '500px', margin: '0 auto'}}>
                {character &&
                    <Card style={{textAlign: 'center', padding: '15px'}}>
                        <div>
                            <img src={character.image} alt={character.name} width={'100%'}/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{fontWeight: 'bold', mt: 2}}>{character.name}</Typography>
                        </div>
                        <div style={{textAlign: 'left', display: 'flex', gap: '3px', flexDirection: 'column', marginTop: '8px'}}>
                            <Typography><span style={{fontWeight: 'bold'}}>Gender:</span> {character.gender}</Typography>
                            <Typography><span style={{fontWeight: 'bold'}}>Location:</span> {character.location.name}</Typography>
                            <Typography><span style={{fontWeight: 'bold'}}>Status:</span> {character.status}</Typography>
                            <Typography><span style={{fontWeight: 'bold'}}>Species:</span> {character.species}</Typography>
                            <Typography><span style={{fontWeight: 'bold'}}>Origin:</span> {character.origin.name}</Typography>
                        </div>
                    </Card>
                    // write location when get location
                }
            </div>
        </Container>
    );
};
