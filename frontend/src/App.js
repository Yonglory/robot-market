import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import NavMenu from './NavMenu/NavMenu';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  useEffect(() => {
    axios.get('http://localhost:8000/api/robots')
    .then((res)=>{
      console.log(res)
    })
  }, []);
  return (
    <div className="App">
      <NavMenu/>
      <Container maxWidth="lg">
      {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      {/* </Box> */}
      </Container>
    </div>
  );
}

export default App;
