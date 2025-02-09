import { fetchYogaExercises } from '@/api/fetchYogaExercises';
import { ExerciseSummary } from '@/components/Exercise/ExerciseSummary';
import { LibraryLayout } from '@/components/LibraryLayout/LibraryLayout';
import { ExerciseItem } from '@/types/ExerciseItem';

export default async function YogaPage() {
  const yogaExercises = await fetchYogaExercises();

  return (
    <LibraryLayout>
      {yogaExercises.map((exercise: ExerciseItem) => (
        <ExerciseSummary key={exercise.slug} exercise={exercise} />
      ))}
    </LibraryLayout>
  );
}
