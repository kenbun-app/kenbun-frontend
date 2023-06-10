import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/src/theme';
import createEmotionCache from '@/src/createEmotionCache';
import AppHeader from '@/src/components/AppHeader';
import AppFooter from '@/src/components/AppFooter';
import { SnackbarProvider } from 'notistack';
import { useRouter } from 'next/router';
import { AuthProvider } from '@/src/contexts/AuthContext';
import { ApiProvider } from '@/src/contexts/ApiContext';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const onFooterChange = (newValue: string) => {
    router.push(newValue);
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={10}>
          <AuthProvider>
            <ApiProvider>
              <AppHeader></AppHeader>
              <Component {...pageProps} />
              <AppFooter onChange={onFooterChange}></AppFooter>
            </ApiProvider>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}