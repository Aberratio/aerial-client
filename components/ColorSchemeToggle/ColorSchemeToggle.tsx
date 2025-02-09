'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useMounted } from '@mantine/hooks';

export const ColorSchemeToggle = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const isMounted = useMounted();

  return isMounted ? (
    colorScheme === 'dark' ? (
      <ActionIcon
        onClick={() => setColorScheme('light')}
        variant="outline"
        color="violet"
        aria-label="Light mode"
        size="lg"
      >
        <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    ) : (
      <ActionIcon
        onClick={() => setColorScheme('dark')}
        variant="outline"
        color="violet"
        aria-label="Dark mode"
        size="lg"
      >
        <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    )
  ) : null;
};
