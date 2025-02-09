'use client';

import { useState } from 'react';
import { IconLock } from '@tabler/icons-react';
import { Button, Flex, PasswordInput, Text, Title } from '@mantine/core';
import { createLocaleCookie } from '@/app/action';

export const Login = () => {
  const icon = <IconLock size={18} stroke={1.5} />;
  const [token, setToken] = useState('');

  return (
    <Flex
      direction="column"
      gap="md"
      justify="center"
      align="center"
      h="100vh"
      w="90vw"
      m="auto"
      style={{ maxWidth: '400px' }}
    >
      <Title order={2}>Cześć! 👋</Title>
      <Text>Podaj token, aby polatać 🤸‍♂️</Text>
      <PasswordInput
        name="token"
        leftSection={icon}
        style={{ width: '100%' }}
        placeholder="Token"
        onChange={(e) => setToken(e.target.value)}
      />
      <Button w="100%" variant="outline" type="submit" onClick={() => createLocaleCookie(token)}>
        Wejdź
      </Button>
    </Flex>
  );
};
