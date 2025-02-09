'use client';

import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';

interface ExerciseSlideProps {
  url: string;
}

export const ExerciseSlide = ({ url }: ExerciseSlideProps) => {
  const { ref, toggle } = useFullscreen();

  return (
    <Carousel.Slide
      style={{
        height: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      key={url}
      ref={ref}
    >
      <Image src={url} h="100%" w="auto" fit="contain" onClick={toggle} />
    </Carousel.Slide>
  );
};
