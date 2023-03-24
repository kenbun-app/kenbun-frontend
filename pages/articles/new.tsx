import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function ArticlesNew() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
            <Item><TextField sx={{width: '100%'}} id="standard-basic" label="url" variant="standard" /></Item>
          </Grid>
          <Grid item xs={4} md={4}>
            <Item><Button variant="contained">Submit</Button></Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}