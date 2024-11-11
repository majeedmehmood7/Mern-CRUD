import React from 'react'
import { AppBar,Typography,Toolbar ,Button } from '@mui/material'
import { Logout } from './Logout'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <AppBar>
        <Toolbar>
            <Typography sx={{flexGrow:1}}>
                CodeDev
            </Typography>
            <Button variant='contained' to="/login" component={Link}>Login</Button>
            <Button variant='contained' to="/signup" component={Link} >Sign Up</Button>
            <Logout/>

        </Toolbar>
    </AppBar>
    </>
  )
}
