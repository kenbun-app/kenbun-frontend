import * as React from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import LoginForm from '@/src/components/LoginForm';
import { useSnackbar } from 'notistack';

export default function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleLogin = () => {
    enqueueSnackbar("Login success", { variant: "success" })
    router.push("/")
  }
  return (
    <Container maxWidth="lg" sx={{pt: 4}}>
      <LoginForm onLoginSucceded={handleLogin}></LoginForm>
    </Container>
  );
}