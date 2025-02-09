import { buildFilesUrl } from '@/builders/buildFilesUrl';
import { VideoItem } from '@/types/VideoItem';

export interface SanityVideoItem {
  asset: {
    _ref: string;
  };
  alt: string;
  description?: string;
}

export const mapToVideoItem = (video: SanityVideoItem): VideoItem => {
  return {
    path: buildFilesUrl(video.asset._ref),
    _ref: video.asset._ref,
    description: video.description || '',
    alt: video.alt || video.description || 'video',
  };
};
