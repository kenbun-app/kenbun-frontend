import React from 'react';
import { FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { useApiContext } from '../contexts/ApiContext';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

type Props = {
  onRegisterUrl: (url: string) => void;
};

export default function NewUrlForm(props: Props) {
  const { api } = useApiContext();
  const { enqueueSnackbar } = useSnackbar();
  const { onRegisterUrl } = props;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      url: { value: string };
    };
    const url = target.url.value;
    api?.postUrl(url).then((url) => {
      enqueueSnackbar("Url registered", { variant: "success" })
      onRegisterUrl(url);
    }).catch((error) => {
      enqueueSnackbar("Url registration failed", { variant: "error" })
    })
  }

  return <Box
    sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8} md={8}>
          <Item><TextField sx={{width: '100%'}} id="standard-basic" label="url" variant="standard" /></Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item><Button variant="contained" type="submit">Submit</Button></Item>
        </Grid>
      </Grid>
    </form>
  </Box>

}