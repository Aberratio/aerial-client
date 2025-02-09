import { groq } from 'next-sanity';
import client from '../sanity.client';
import { mapToExerciseItem } from './sanity-types/SanityYogaExerciseItem';

export const fetchYogaExercises = async () => {
  const exercises = await client.fetch(
    groq`*[_type == "yogaExercise"  && !(_id in path('drafts.**'))]`
  );

  return exercises?.map(mapToExerciseItem);
};
