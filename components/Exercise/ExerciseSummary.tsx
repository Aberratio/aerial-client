'use client';

import { useRouter } from 'next/navigation';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { ExerciseItem } from '@/types/ExerciseItem';

interface ExerciseSummaryProps {
  exercise: ExerciseItem;
}

export const ExerciseSummary = ({ exercise }: ExerciseSummaryProps) => {
  const router = useRouter();

  const goToExercise = () => {
    router.push(`/hoop/${exercise.slug}`);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 300 }}>
      <Card.Section>
        <Image src={exercise.mainImage.path} height={360} alt={exercise.mainImage.alt} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{exercise.name}</Text>
        <Badge color="pink">{exercise.level}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {exercise.summary}
      </Text>

      <Button
        variant="gradient"
        gradient={{ from: 'grape', to: 'violet', deg: 152 }}
        fullWidth
        mt="md"
        radius="md"
        onClick={goToExercise}
      >
        Zobacz ćwiczenie
      </Button>
    </Card>
  );
};
