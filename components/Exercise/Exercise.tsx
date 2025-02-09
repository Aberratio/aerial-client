'use client';

import { Carousel } from '@mantine/carousel';
import { Badge, Flex, Text, Title } from '@mantine/core';
import { ExerciseItem } from '@/types/ExerciseItem';
import { ExerciseSlide } from './ExerciseSlide';
import { VideoPlayer } from './VideoPlayer';
import classes from './Exercise.module.css';

export const Exercise = ({ exercise }: { exercise: ExerciseItem }) => {
  const images = [exercise.mainImage, ...(exercise.gallery || [])];

  const slides = images?.map((image) => <ExerciseSlide key={image._ref} url={image.path} />);

  if (!exercise) {
    return null;
  }

  return (
    <Flex direction="column" gap="md">
      <Carousel
        height={600}
        slideSize={{ base: '100%', sm: '50%', md: images.length > 1 ? '33.333333%' : '50%' }}
        slideGap={{ base: 0, sm: 'md' }}
        loop
        dragFree
        withIndicators={images.length > 1}
        withControls={images.length > 1}
        classNames={classes}
      >
        {slides}
      </Carousel>
      <Title order={3}>{exercise.name}</Title>
      <Flex gap="xs">
        <Badge color="pink">{exercise.level}</Badge>
        <Badge color="yellow">{exercise.type}</Badge>
      </Flex>
      <Text>{exercise.description}</Text>

      {exercise.video && <VideoPlayer url={exercise.video.path} />}
    </Flex>
  );
};
