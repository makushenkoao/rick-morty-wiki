import React, {FC, useState} from 'react';
import {ICharacter} from "../models";
import {Card, Typography} from "@mui/material";
import {Link} from 'react-router-dom'

interface CharacterItemProps {
    character: any
}

export const CharacterItem: FC<CharacterItemProps> = ({character}) => {
    const [pagination, setPagination] = useState('');
    const {id, location, name, image} = character
    return (
        <Card
            className='card'
        >
            <Link to={'/' + id}>
                <div>
                    <img src={image} alt={name} width={'100%'}/>
                </div>
                <div>
                    <Typography variant='h5' sx={{fontWeight: 'bold', mt: 2}}>{name}</Typography>
                </div>
            </Link>
        </Card>
    );
};
