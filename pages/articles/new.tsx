import * as React from 'react';
import Container from '@mui/material/Container';
import NewUrlForm from '@/src/components/NewUrlForm';

export default function ArticlesNew() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      url: data.get('url'),
    });
  };
  return (
    <Container maxWidth="lg">
      <NewUrlForm />
    </Container>
  );
}
