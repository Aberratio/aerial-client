'use client';

import { AspectRatio } from '@mantine/core';

export const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={url}
        title="My video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
};
