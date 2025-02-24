'use client';

import { Button, Container, Group, Text } from '@mantine/core';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Twoje ciało{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'grape', to: 'violet', deg: 152 }}
            inherit
          >
            potrafi więcej!
          </Text>{' '}
        </h1>

        <Text className={classes.description} c="dimmed">
          Setki figur w jednym miejscu. Znajdź inspirację, trenuj efektywnie i rozwijaj swoje
          możliwości.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'grape', to: 'violet', deg: 152 }}
            onClick={() => (window.location.href = '/hoop')}
          >
            Rozpocznij
          </Button>

          {/* <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
          >
            Zaloguj się
          </Button> */}
        </Group>
      </Container>
    </div>
  );
}
