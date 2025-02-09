import { groq } from 'next-sanity';
import client from '../sanity.client';
import { mapToExerciseItem } from './sanity-types/SanityHoopExerciseItem';

export const fetchHoopExercises = async () => {
  const exercises = await client.fetch(
    groq`*[_type == "hoopExercise"  && !(_id in path('drafts.**'))]`
  );

  return exercises?.map(mapToExerciseItem);
};
