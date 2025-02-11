import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import React from 'react';
import { cookies } from 'next/headers';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { AppShell } from '@/components/AppShell/AppShell';
import { Login } from '@/components/Login/Login';
import { theme } from '../theme';

export const metadata = {
  title: 'Aerial Library',
  description: 'Aerial sports library',
};

export default async function RootLayout({ children }: { children: any }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  return (
    <html lang="pl" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {token?.value !== process.env.NEXT_PUBLIC_TOKEN ? (
            <Login />
          ) : (
            <AppShell>{children}</AppShell>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}
