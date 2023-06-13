import * as React from 'react';
import Container from '@mui/material/Container';
import NewUrlForm from '@/src/components/NewUrlForm';
import { useSnackbar } from 'notistack';

export default function ArticlesNew() {
  const { enqueueSnackbar } = useSnackbar();
  const handleRegister = (url: string) => {
    enqueueSnackbar(`Registered: ${url}`, { variant: "success" })
  }
  const handleError = (reason: any) => {
    enqueueSnackbar(reason, { variant: "error" })
  }
  return (
    <Container maxWidth="lg">
      <NewUrlForm onUrlRegistrationSucceeded={handleRegister} onUrlRegistrationFailed={handleError} />
    </Container>
  );
}
