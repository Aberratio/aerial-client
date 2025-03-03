import { ExerciseItem, TagItem } from '@/types/ExerciseItem';
import { mapToPhotoItem, SanityPhotoItem } from './SanityPhotoItem';
import { mapToVideoItem, SanityVideoItem } from './SanityVideoItem';

export interface SanityYogaExerciseItem {
  _id: string;
  name: string;
  slug: { current: string };
  level: string;
  description: string;
  main_image: SanityPhotoItem;
  gallery?: SanityPhotoItem[];
  summary: string;
  type: 'figure' | 'set';
  under_hoop: boolean;
  in_hoop: boolean;
  on_hoop: boolean;
  video?: SanityVideoItem;
}

export const mapToExerciseItem = (exercise: SanityYogaExerciseItem): ExerciseItem | null => {
  if (!exercise) {
    return null;
  }

  const getLevel = (level: string) => {
    switch (level) {
      case 'basic':
        return 'Początkujący';
      case 'intermediate':
        return 'Średniozaawansowany';
      case 'advanced':
        return 'Zaawansowany';
      default:
        return 'Początkujący';
    }
  };

  return {
    slug: exercise.slug.current,
    name: exercise.name,
    level: getLevel(exercise.level),
    summary: exercise.summary,
    type: exercise.type === 'figure' ? 'Figurka' : 'Zestaw',
    description: exercise.description,
    mainImage: mapToPhotoItem(exercise.main_image),
    gallery: [],
    tags: [
      exercise.in_hoop ? { label: 'W kółku', value: 'in_hoop' } : null,
      exercise.on_hoop ? { label: 'Na kółku', value: 'on_hoop' } : null,
      exercise.under_hoop ? { label: 'Pod kółkiem', value: 'under_hoop' } : null,
    ].filter(Boolean) as TagItem[],
    video: exercise.video ? mapToVideoItem(exercise.video) : undefined,
  };
};
