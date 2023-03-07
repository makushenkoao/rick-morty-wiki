import React from 'react';
import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <AppBar color='inherit' position='fixed' >
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <Link
                        to='/'
                        style={{fontSize: '30px', fontWeight: 'bold', textDecoration: 'none', color: 'inherit'}}
                    >
                        Rick & Morty<span style={{color: 'orange', marginLeft: '6px'}}>Wiki</span></Link>
                </div>
                <div style={{display: 'flex', gap: '10px', fontSize: '20px'}}>
                    <NavLink to='/'>Characters</NavLink>
                    <NavLink to='/episode'>Episode</NavLink>
                    <NavLink to='/location'>Location</NavLink>
                </div>
            </Toolbar>
        </AppBar>
    );
};
