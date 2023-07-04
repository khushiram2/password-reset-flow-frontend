import React, { useContext } from 'react'
import "./header.css"
import { Avatar, Menu, MenuItem } from '@mui/material';

import { DataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
    const navigate=useNavigate()
    const a = useContext(DataContext)
    const userData = a.userData
    const setUserData=a.setUserData
    const name = userData.name
    const token=window.localStorage.getItem("logintoken")


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if(token){
            setAnchorEl(event.currentTarget);
        }
        
    };


    const handleClose = () => {
        setAnchorEl(null);
        window.localStorage.removeItem("logintoken")
        setUserData({})
        navigate("/login")
    };
    return (
        <header >
            <nav className='navbar'>
                <h1>Password Reset Flow</h1>
                <div>
                    {userData.name ? <Avatar onClick={(event) => handleClick(event)} >{name[0].toUpperCase()}</Avatar> : <Avatar></Avatar>}

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                       
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </nav>
        </header>
    )
}
