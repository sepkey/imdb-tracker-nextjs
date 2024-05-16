import Movies from '@/components/Movies';
import { WatchedMovies } from '@/components/WatchedMovies';
import { assertIsMovies } from '@/types/assertions';

const API_KEY = process.env.API_KEY;

type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    query?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const query = searchParams?.query;

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok)
    throw new Error('Something went wrong while fetching movies!');

  const data = await response.json();

  const body = data.Search as unknown;

  assertIsMovies(body);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-[80%_20%] px-2"
      suppressHydrationWarning
    >
      <Movies results={body} />
      <WatchedMovies />
    </div>
  );
}
