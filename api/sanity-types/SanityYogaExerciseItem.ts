import { ExerciseItem } from '@/types/ExerciseItem';
import { mapToPhotoItem, SanityPhotoItem } from './SanityPhotoItem';

export interface SanityYogaExerciseItem {
  _id: string;
  name: string;
  level: string;
  description: string;
  main_image: SanityPhotoItem;
  gallery?: SanityPhotoItem[];
  summary: string;
}

export const mapToExerciseItem = (exercise: SanityYogaExerciseItem): ExerciseItem => {
  return {
    slug: exercise._id,
    name: exercise.name,
    level: exercise.level,
    summary: exercise.summary,
    description: exercise.description,
    mainImage: mapToPhotoItem(exercise.main_image),
    gallery: [],
  };
};
