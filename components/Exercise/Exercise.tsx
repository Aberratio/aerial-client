'use client';

import { IconAlertCircle, IconInfoCircle } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Badge, Button, Flex, List, Stepper, Text, ThemeIcon, Title } from '@mantine/core';
import { ExerciseItem } from '@/types/ExerciseItem';
import { ExerciseSlide } from './ExerciseSlide';
import classes from './Exercise.module.css';

export const Exercise = ({ exercise }: { exercise: ExerciseItem }) => {
  const images = [exercise.mainImage, ...(exercise.gallery || [])];

  const slides = images?.map((image) => <ExerciseSlide key={image._ref} url={image.path} />);

  const openVideoOnFullScreen = () => {
    if (exercise.video) {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      overlay.style.zIndex = '9999';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';

      const video = document.createElement('video');
      video.src = exercise.video.path;
      video.controls = true;
      video.autoplay = true;
      video.style.maxWidth = '90%';
      video.style.maxHeight = '90%';
      video.style.outline = 'none';

      const closeButton = document.createElement('button');
      closeButton.innerHTML = '&#10006;';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '20px';
      closeButton.style.right = '20px';
      closeButton.style.background = 'none';
      closeButton.style.border = 'none';
      closeButton.style.color = 'white';
      closeButton.style.fontSize = '30px';
      closeButton.style.cursor = 'pointer';

      closeButton.onclick = () => {
        document.body.removeChild(overlay);
      };

      overlay.appendChild(video);
      overlay.appendChild(closeButton);
      document.body.appendChild(overlay);
    }
  };

  if (!exercise) {
    return null;
  }

  return (
    <Flex direction="column" gap="lg" p="md">
      <Flex
        direction="column"
        gap="xs"
        maw={800}
        mx="auto"
        align="flex-start"
        justify="flex-start"
        w="100%"
      >
        <Title order={2}>{exercise.name}</Title>
        <Flex gap="xs">
          <Badge color="pink">{exercise.level}</Badge>
          <Badge color="yellow">{exercise.type}</Badge>
        </Flex>
        <Text size="lg" my="xs">
          {exercise.description}
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

      {exercise.keyPoints && (
        <Flex
          direction="column"
          gap="xs"
          maw={800}
          mx="auto"
          align="flex-start"
          justify="flex-start"
          w="100%"
          mt="xl"
        >
          <Title order={3} c="indigo" mb="xs">
            Figurka krok po kroku
          </Title>
          <Stepper orientation="vertical" active={0}>
            {exercise.keyPoints?.map((point, index) => (
              <Stepper.Step key={point} label={`Krok ${index + 1}`} description={point} />
            ))}
          </Stepper>
        </Flex>
      )}

      {exercise.keyPoints && (
        <Flex
          direction="column"
          gap="xs"
          maw={800}
          mx="auto"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          <Flex gap="xs" direction="column">
            <Title order={3} c="teal" mb="xs">
              Kluczowe punkty
            </Title>
            <List
              spacing="xs"
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconInfoCircle size={16} />
                </ThemeIcon>
              }
            >
              {exercise.keyPoints.map((point) => (
                <List.Item key={point}>{point}</List.Item>
              ))}
            </List>
          </Flex>
        </Flex>
      )}
      {exercise.commonMistakes && (
        <Flex
          direction="column"
          gap="xs"
          maw={800}
          mx="auto"
          align="flex-start"
          justify="flex-start"
          w="100%"
          mt="xl"
        >
          <Flex gap="xs" direction="column">
            <Title order={3} c="red" mb="xs">
              Typowe błędy:
            </Title>
            <List
              spacing="xs"
              icon={
                <ThemeIcon color="red" size={24} radius="xl">
                  <IconAlertCircle size={16} />
                </ThemeIcon>
              }
            >
              {exercise.commonMistakes.map((mistake) => (
                <List.Item key={mistake}>{mistake}</List.Item>
              ))}
            </List>
          </Flex>
        </Flex>
      )}

      {exercise.video && (
        <Flex direction="column" gap="xs" mx="auto" align="center" w="100%" mt="xl">
          <Button
            variant="gradient"
            gradient={{ from: 'grape', to: 'violet', deg: 152 }}
            style={{ width: 300 }}
            onClick={openVideoOnFullScreen}
          >
            Pokaż film
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
