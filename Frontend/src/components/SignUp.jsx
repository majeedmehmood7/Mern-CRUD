import React from 'react'
import {Grid , Paper,TextField} from '@mui/material'
import './Adduser.css'

export const SignUp = () => {
  return (
    <>
    <Grid align="center">
        <Paper sx={{height:'60vh'}}>
        <form className="userForm">
            <TextField label="Enter Your Name" />
            <TextField label="Enter Your Email" />
            <TextField label="Enter Your Password" />
        </form>
        </Paper>
    </Grid>
    </>
  )
}
