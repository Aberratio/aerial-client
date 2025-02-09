import { fetchHoopExercise } from '@/api/fetchHoopExercise';
import { Exercise } from '@/components/Exercise/Exercise';

export const dynamic = 'force-dynamic';

interface HoopPageProps {
  params: { slug: string };
}

const HoopPage = async ({ params }: HoopPageProps) => {
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
