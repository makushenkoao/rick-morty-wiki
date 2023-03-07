import React, {useState} from 'react';
import {AppBar, Drawer, IconButton, Toolbar} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import {ChevronLeft, Menu} from '@mui/icons-material'


const drawerWidth = 240;

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <AppBar color='inherit' position='fixed' >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    onClick={() => setIsOpen(true)}
                >
                    <Menu fontSize={'large'}/>
                </IconButton>
                <div>
                    <Link
                        to='/'
                        style={{fontSize: '30px', fontWeight: 'bold', textDecoration: 'none', color: 'inherit'}}
                    >
                        Rick & Morty<span style={{color: 'orange', marginLeft: '6px'}}>Wiki</span></Link>
                </div>
                <Drawer
                    open={isOpen}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                >
                    <IconButton
                        onClick={() => setIsOpen(false)}
                    >
                        <ChevronLeft fontSize={'large'}/>
                    </IconButton>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '20px', padding: '0 15px', marginTop: '15px'}}>
                        <NavLink to='/'>Characters</NavLink>
                        <NavLink to='/episode'>Episode</NavLink>
                        <NavLink to='/location'>Location</NavLink>
                    </div>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};
