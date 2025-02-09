'use client';

import Video from 'next-video';
import { AspectRatio } from '@mantine/core';

export const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <AspectRatio ratio={16 / 9} style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
      <Video src={url} />
    </AspectRatio>
  );
};
