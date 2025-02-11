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
    <Flex direction="column" gap="md" p="md">
      <Flex direction="column" gap="xs" maw={800} mx="auto">
        <Title order={2}>{exercise.name}</Title>
        <Flex gap="xs">
          <Badge color="pink">{exercise.level}</Badge>
          <Badge color="yellow">{exercise.type}</Badge>
        </Flex>
        <Text size="lg" my="xs">
          {exercise.summary}
        </Text>
      </Flex>
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
      <Flex direction="column" gap="xs" maw={800} mx="auto">
        <Text size="lg">{exercise.description}</Text>
      </Flex>
      {exercise.video && <VideoPlayer url={exercise.video.path} />}
    </Flex>
  );
};
