import { PhotoItem } from './PhotoItem';

export interface ExerciseItem {
  slug: string;
  name: string;
  level: string;
  type: string;
  summary: string;
  description?: string;
  mainImage: PhotoItem;
  gallery?: PhotoItem[];
  tags: TagItem[];
}

export type TagItem = {
  label: string;
  value: string;
};
