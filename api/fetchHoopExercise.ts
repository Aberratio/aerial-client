import { groq } from 'next-sanity';
import client from '../sanity.client';
import { mapToExerciseItem } from './sanity-types/SanityHoopExerciseItem';

export const fetchHoopExercise = async (slug: string) => {
  const exercise = await client.fetch(
    groq`*[_type == "hoopExercise"  && !(_id in path('drafts.**')) && slug.current == "${slug}"][0]`
  );

  return mapToExerciseItem(exercise);
};
