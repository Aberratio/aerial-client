'use client';

import { AspectRatio } from '@mantine/core';

export const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <AspectRatio ratio={16 / 9} style={{ maxWidth: '700px', width: '100%', margin: '20px auto' }}>
      <iframe
        src={url}
        title="My video player"
        style={{ border: 0 }}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; webkitallowfullscreen; mozallowfullscreen"
        allowFullScreen
      />
    </AspectRatio>
  );
};
