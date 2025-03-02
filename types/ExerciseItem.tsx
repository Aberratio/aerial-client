import { PhotoItem } from './PhotoItem';
import { VideoItem } from './VideoItem';

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
  video?: VideoItem;
  keyPoints?: string[];
  commonMistakes?: string[];
}

export type TagItem = {
  label: string;
  value: string;
};
