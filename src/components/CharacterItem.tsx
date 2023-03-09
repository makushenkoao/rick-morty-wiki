import React, {FC, useState} from 'react';
import {ICharacter} from "../models";
import {Card, Typography} from "@mui/material";
import {Link} from 'react-router-dom'

interface CharacterItemProps {
    character: any
}

export const CharacterItem: FC<CharacterItemProps> = ({character}) => {
    const [pagination, setPagination] = useState('');
    const {id, location, name, image, status} = character
    let backgroundStatus;

    if (status === 'Alive') {
        backgroundStatus = 'green'
    } else if (status === 'Dead') {
        backgroundStatus = 'red'
    } else {
        backgroundStatus = 'gray'
    }

    return (
        <Card
            className='card'
            sx={{position: 'relative'}}
        >
            <Link to={'/' + id}>
                <div>
                    <img src={image} alt={name} width={'100%'}/>
                </div>
                <div>
                    <Typography sx={{
                        fontWeight: 'bold',
                        mt: 2,
                        fontSize: window.innerWidth > 768 ? '25px': '15px',
                    }}>{name}</Typography>
                </div>
            </Link>
            <Typography
                sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    background: backgroundStatus,
                    padding: '5px 10px',
                    borderRadius: '6px'
            }}
            >{status}</Typography>
        </Card>
    );
};
