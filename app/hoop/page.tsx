import { fetchHoopExercises } from '@/api/fetchHoopExercises';
import { ExerciseSummary } from '@/components/Exercise/ExerciseSummary';
import { LibraryLayout } from '@/components/LibraryLayout/LibraryLayout';
import { ExerciseItem } from '@/types/ExerciseItem';

export default async function HoopPage() {
  const hoopExercises = await fetchHoopExercises();

  return (
    <LibraryLayout>
      {hoopExercises.map((exercise: ExerciseItem) => (
        <ExerciseSummary key={exercise.slug} exercise={exercise} />
      ))}
    </LibraryLayout>
  );
}
