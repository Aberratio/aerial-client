'use client';

import { Burger, Flex, AppShell as MantineAppShell, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

// import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <MantineAppShell.Header>
        <Flex justify="space-between" align="center" h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
          <ColorSchemeToggle />
        </Flex>
      </MantineAppShell.Header>

      <MantineAppShell.Navbar p="md">
        <NavLink href="/hoop" label="Koła" leftSection={<Text>🐉</Text>} />
        {/* <NavLink href="/hammock" label="Hamaki" leftSection={<Text>🐱‍🏍</Text>} />
        <NavLink href="/yoga" label="Yoga" leftSection={<Text>🧘‍♀️</Text>} /> */}
      </MantineAppShell.Navbar>

      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
};
