import React from 'react';
import { FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { useApiContext } from '../contexts/ApiContext';


type Props = {
  onUrlRegistrationSucceeded: (url: string) => void;
  onUrlRegistrationFailed: (reason: any) => void;
};

export default function NewUrlForm(props: Props) {
  const { api } = useApiContext();
  const { onUrlRegistrationSucceeded, onUrlRegistrationFailed } = props;
  const [url, setUrl] = React.useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api?.postUrl(url).then(onUrlRegistrationSucceeded).catch(onUrlRegistrationFailed)
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
          <Item><TextField sx={{ width: '100%' }} label="url" variant="standard" value={url} onChange={(event) => setUrl(event.target.value)} /></Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item><Button variant="contained" type="submit">Submit</Button></Item>
        </Grid>
      </Grid>
    </form>
  </Box>

}