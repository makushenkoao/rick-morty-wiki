import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate()
    const startUrl = window.location.href.replace(/\d+$/, "");

    return (
        <Tooltip title="Back"
            onClick={() => navigate(startUrl)}
        >
            <IconButton>
                <ArrowBackIcon fontSize={'large'} />
            </IconButton>
        </Tooltip>
    );
};