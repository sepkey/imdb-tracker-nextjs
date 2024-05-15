import Results from '@/components/Results';
import { assertIsMovies } from '@/types/assertions';

type Props = {
  params: { query: string };
};

export default async function SearchPage({ params }: Props) {
  console.log(params);
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${params.query}`
  );

  if (!response.ok)
    throw new Error('Something went wrong while fetching movies!');

  const data = await response.json();

  const body = data.Search as unknown;

  assertIsMovies(body);

  return (
    <div>
      {body && body.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {body && <Results results={body} />}
    </div>
  );
}
