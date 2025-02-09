import { fetchHoopExercise } from '@/api/fetchHoopExercise';
import { Exercise } from '@/components/Exercise/Exercise';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const HoopPage = async ({ params }: Props) => {
  const myParams = await params;

  if (!myParams) {
    return null;
  }

  const slug = myParams.slug;

  const exercise = await fetchHoopExercise(slug);

  if (!exercise) {
    return null;
  }

  return <Exercise exercise={exercise} />;
};

export default HoopPage;
