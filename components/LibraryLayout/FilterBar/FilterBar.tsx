'use client';

import { useState } from 'react';
import { Flex, MultiSelect } from '@mantine/core';

export const FilterBar = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Flex
      mih={50}
      gap="md"
      justify={{ base: 'center', md: 'flex-start' }}
      align="center"
      direction="row"
      wrap="wrap"
    >
      <MultiSelect data={['React', 'Angular', 'Vue', 'Svelte']} value={value} onChange={setValue} />
    </Flex>
  );
};
