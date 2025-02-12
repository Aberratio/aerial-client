'use client';

import { useRouter } from 'next/navigation';
import { Burger, Flex, AppShell as MantineAppShell, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
// import { Footer } from '../Footer/Footer';
import { Logo } from '../Logo/Logo';

// import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();

  return (
    <MantineAppShell
      header={{ height: 70 }}
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
          <Logo size={50} onClick={() => router.push('/')} />
          <ColorSchemeToggle />
        </Flex>
      </MantineAppShell.Header>
      <MantineAppShell.Navbar p="md">
        <NavLink href="/hoop" label="Aerial Hoop" leftSection={<Text>🐉</Text>} />
        {/* <NavLink href="/hammock" label="Hamaki" leftSection={<Text>🐱‍🏍</Text>} />
        <NavLink href="/yoga" label="Yoga" leftSection={<Text>🧘‍♀️</Text>} /> */}
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>{children}</MantineAppShell.Main>
      {/* <Footer /> */}
    </MantineAppShell>
  );
};
