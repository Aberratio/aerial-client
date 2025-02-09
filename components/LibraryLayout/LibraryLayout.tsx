import { Flex } from '@mantine/core';

export const LibraryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex gap="md" direction="column" p="auto" align="center">
      <h1>Biblioteka ćwiczeń</h1>

      <Flex
        mih={50}
        gap="md"
        justify={{ base: 'center', md: 'flex-start' }}
        align="center"
        direction="row"
        wrap="wrap"
      >
        {children}
      </Flex>
    </Flex>
  );
};
